import { useParams } from "react-router-dom";
import { useGetFacilitiesQuery } from "../../../redux/features/facilities/facilitiesApi";
import HeaderBanner from "../../../utils/HeaderBanner";
import { FaRegCalendarCheck } from "react-icons/fa6";
import ContactInfo from "../../about/ContactInfo";
import Testimonials from "../Testimonials/Testimonials";

const FeatureDetails = () => {
  const { id } = useParams();
  const { data: singleFacility, isLoading } = useGetFacilitiesQuery(id);
  console.log(singleFacility?.data);
  if (isLoading) {
    return <span>...</span>;
  }
  const facilityData = singleFacility?.data;

  const { description, image, location, name, pricePerHour } = facilityData;

  return (
    <>
      <HeaderBanner title={name} page={"facility-details"} />
      <div className="max-w-6xl mx-auto py-16">
        <div className=" grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-12 gap-12">
          <div className="col-span-7">
            <img
              className="h-full w-full rounded object-cover"
              src={image}
              alt=""
            />
          </div>
          <div className="col-span-5">
            <h2 className="text-2xl font-semibold text-[#333]">{name}</h2>
            <h3 className="my-2">
              <span className="font-semibold">Location :</span> {location}
            </h3>
            <h3 className="my-2">
              <span className="font-semibold">Price Per Hour :</span>
              <span className="text-2xl text-[#097E52]">
                {" "}
                ${pricePerHour}/hr
              </span>
            </h3>
            <p>{description}</p>
            <div className="my-6">
              <button className="btn btn-neutral">
                <FaRegCalendarCheck className="text-xl" /> Book Now
              </button>
            </div>
          </div>
        </div>

        <div className="my-16"></div>
        <ContactInfo />
      </div>
    </>
  );
};

export default FeatureDetails;
