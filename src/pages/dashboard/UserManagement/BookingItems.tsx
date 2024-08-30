import { Table, TableColumnsType, TableProps } from "antd";
import { selectCurrentUser } from "../../../redux/features/auth/authSlice";
import {
  useCancelBookingMutation,
  useGetBookingQuery,
} from "../../../redux/features/booking/bookingApi";
import { useAppSelector } from "../../../redux/hook";
import { FieldValues, SubmitHandler } from "react-hook-form";

export type TBookingData = {
  date: string;
  startTime: string;
  endTime: string;
  role: string;
  facility: string;
  payableAmount: number;
  isBooked: string;
  _id: string;
};

interface DataType {
  key: React.Key;
  name: string;
  date: string;
  startTime: string;
  endTime: string;
  role: string;
  facility: string;
  payableAmount: number;
  isBooked: string;
}

const BookingItems = () => {
  const selectUser = useAppSelector(selectCurrentUser);
  const currentBookingUser = selectUser?.user._id;
  const { data: bookingData, isFetching } =
    useGetBookingQuery(currentBookingUser);

  const [cancelBooking] = useCancelBookingMutation();

  const tableData = bookingData?.data?.map(
    ({
      _id,
      date,
      startTime,
      endTime,
      role,
      facility,
      payableAmount,
      isBooked,
    }: TBookingData) => ({
      key: _id,
      date,
      startTime,
      endTime,
      role,
      facility,
      payableAmount,
      isBooked,
    })
  );

  const CancelOrder: SubmitHandler<FieldValues> = (id) => {
    // console.log(id);
    cancelBooking(id);
  };

  const columns: TableColumnsType<DataType> = [
    {
      title: "",
      dataIndex: "facility",
      render: (facility) => {
        return (
          <>
            <img className="size-10  rounded" src={facility?.image} alt="" />
          </>
        );
      },
    },
    {
      title: "Facility",
      dataIndex: "facility",
      render: (facility) => {
        return (
          <>
            <span>{facility?.name}</span>
          </>
        );
      },
    },
    {
      title: "Amount",
      dataIndex: "payableAmount",
    },
    {
      title: "Date",
      dataIndex: "date",
    },
    {
      title: "Start Time",
      dataIndex: "startTime",
    },
    {
      title: "End Time",
      dataIndex: "endTime",
    },
    {
      title: "Status",
      dataIndex: "isBooked",
      render: (isBooked) => {
        return (
          <>
            {isBooked === "confirmed" ? (
              <span className="bg-success p-1 px-2 rounded-full text-white">
                {isBooked && "Confirmed"}
              </span>
            ) : (
              <span className="bg-info p-1 px-2 rounded-full text-white">
                {isBooked && "Canceled"}
              </span>
            )}
          </>
        );
      },
    },
    {
      title: "Action",
      render: (record) => {
        return (
          <>
            <button
              onClick={() => CancelOrder(record?.key)}
              className="btn btn-sm bg-error text-white"
            >
              Cancel
            </button>
          </>
        );
      },
    },
  ];

  const onChange: TableProps<DataType>["onChange"] = (
    pagination,
    filters,
    sorter,
    extra
  ) => {
    console.log("params", pagination, filters, sorter, extra);
  };

  return (
    <div>
      <div>
        <h2 className="text-xl font-semibold text-[#333] mb-6">
          My Booking Data
        </h2>

        <Table
          loading={isFetching}
          columns={columns}
          dataSource={tableData}
          onChange={onChange}
          showSorterTooltip={{ target: "sorter-icon" }}
        />
      </div>
    </div>
  );
};

export default BookingItems;
