/* eslint-disable @typescript-eslint/no-explicit-any */
import { useParams } from "react-router-dom";
import { useGetFacilitiesQuery } from "../../redux/features/facilities/facilitiesApi";
import HeaderBanner from "../../utils/HeaderBanner";
import { Button, DatePicker, DatePickerProps } from "antd";
import { useGetAvailabilityQuery } from "../../redux/features/availbility/availabilityApi";
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import { setDate } from "../../redux/features/availbility/availbilitySlice";
import dayjs from "dayjs";
import MainForm from "../../components/form/MainForm";
import FormSelect from "../../components/form/FormSelect";
import { FieldValues, SubmitHandler } from "react-hook-form";
import CheckoutForm from "../payment/CheckoutForm";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useState } from "react";
import { selectCurrentUser } from "../../redux/features/auth/authSlice";
import { useAddBookingMutation } from "../../redux/features/booking/bookingApi";
import { toast } from "sonner";
import { ApiError } from "../../types/global";

interface Availability {
  startTime: string;
  endTime: string;
}

const BookingContainer = () => {
  const [addBooking] = useAddBookingMutation();
  const [showPayment, setShowPayment] = useState(false);
  // const [bookingRendomInfo, setBookingRendomInfo] = useState({});
  const currentUser = useAppSelector(selectCurrentUser);
  const dispatch = useAppDispatch();
  const selector = useAppSelector((item) => item?.date?.date);
  const { data: availability } = useGetAvailabilityQuery(selector);
  const currentUserId = currentUser?.user?._id;

  const { id } = useParams();
  const { data: singleFacility, isLoading } = useGetFacilitiesQuery(id);

  if (isLoading) {
    return <span>...</span>;
  }
  const facilityData = singleFacility?.data;

  const { image, location, name, pricePerHour, _id: facilityId } = facilityData;

  // DatePicker onChange handler
  const onChange: DatePickerProps["onChange"] = (date) => {
    if (date && date.isValid()) {
      const formattedDate = dayjs(date).format("YYYY-MM-DD");
      console.log("Formatted Date:", formattedDate); // Debugging line
      dispatch(setDate({ dateString: formattedDate }));
    } else {
      console.error("Invalid date selected"); // Debugging line
    }
  };

  const stripePromise = loadStripe(
    "pk_test_51OFsgYEOWkAuBZzb7dFY77C3AvZ5KnRxQQCXzasHomZP2tyZ8mvB59Otsc4QJvbARlfnjoDrxzUVgi3532hAqtRS008SNQqy0c"
  );

  const bookingSlot: SubmitHandler<FieldValues> = async (data) => {
    const bookingInfo = {
      date: selector,
      startTime: data.startTime,
      endTime: data.endTime,
      facility: facilityId,
      payableAmount: pricePerHour,
      user: currentUserId,
    };
    // setBookingRendomInfo(bookingInfo);
    try {
      const res = await addBooking(bookingInfo).unwrap();
      if (res.success) {
        setShowPayment(true);
      }
      console.log(res);
    } catch (error) {
      console.log(error);
      const apiError = error as ApiError;
      toast.error(apiError?.data?.message || "An error occurred", {
        duration: 1000,
      });
    }
  };

  const slotOptionsStartTime = availability?.data?.map(
    (item: Availability) => ({
      value: item.startTime,
      label: item.startTime,
    })
  );
  const slotOptionsEndTime = availability?.data?.map((item: Availability) => ({
    value: item.endTime,
    label: item.endTime,
  }));

  return (
    <div>
      <HeaderBanner title={"Booking Page"} page={"booking-info"} />
      <div className="max-w-6xl mx-auto my-20 px-4 xl:px-0">
        <div className="flex gap-16 flex-col lg:flex-row">
          <div className="w-full">
            <div className="overflow-x-auto">
              <table className="border flex table table-zebra">
                <thead>
                  <th>Image</th>
                  <th>Facility Name</th>
                  <th>Location</th>
                  <th>Price</th>
                </thead>
                <tbody>
                  <tr>
                    <th>
                      <img className="size-16 rounded" src={image} alt={name} />
                    </th>
                    <td>{name}</td>
                    <td>{location}</td>
                    <td>${pricePerHour}/hr</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="my-10">
              <h2 className="text-xl font-bold text-[#333]">
                {" "}
                Check Availability
              </h2>

              <div className="my-4">
                <DatePicker
                  size="large"
                  className="w-full"
                  onChange={onChange}
                />
                <div className="my-6">
                  <h2 className="text-xl font-semibold mb-4">
                    Available Slots : {selector ? selector : "Selected Date"}
                  </h2>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6  border p-6 rounded">
                    {availability?.data?.map((item: any, index: any) => (
                      <div
                        key={index}
                        className="bg-gray-800 p-3 text-white font-normal rounded-full text-xs text-center"
                      >
                        <span>
                          {item.startTime} - {item.endTime}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className=" lg:w-[600px] p-4 border rounded">
            <div>
              <h2 className="text-xl font-bold text-[#333] text-center mb-6">
                CheckOut
              </h2>
              <h1>Facility Name : {name}</h1>
              <h1>
                Total Price :
                <span className="text-xl font-bold"> ${pricePerHour}/hr</span>
              </h1>
              <div className="mt-4">
                <h2 className="mb-2 font-semibold text-[#333]">Booking Slot</h2>
                <MainForm onSubmit={bookingSlot}>
                  <div className="flex gap-10 items-center">
                    <div className="w-full">
                      <FormSelect
                        label={"StartTime"}
                        name={"startTime"}
                        options={slotOptionsStartTime}
                      />
                    </div>
                    <div className="w-full">
                      <FormSelect
                        label={"End Time"}
                        name={"endTime"}
                        options={slotOptionsEndTime}
                      />
                    </div>
                  </div>
                  <div className="py-6">
                    {showPayment ? (
                      ""
                    ) : (
                      <Button
                        htmlType="submit"
                        className="btn btn-neutral btn-block"
                      >
                        Pay Process
                      </Button>
                    )}
                  </div>
                </MainForm>
                {showPayment && (
                  <Elements stripe={stripePromise}>
                    <CheckoutForm price={pricePerHour} />
                  </Elements>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingContainer;
