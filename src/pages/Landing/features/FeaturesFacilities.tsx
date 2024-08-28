import { MdOutlineArrowCircleRight } from "react-icons/md";
import SectionHeading from "../../../utils/SectionHeading";
import { useGetFacilitiesQuery } from "../../../redux/features/facilities/facilitiesApi";
import SingleFactureFacilities, {
  TFacilitiesDataType,
} from "./SingleFactureFacilities";

const FeaturesFacilities = () => {
  const { data: facilities, isLoading } = useGetFacilitiesQuery(undefined);
  console.log(facilities?.data);
  if (isLoading) {
    return <span>loading...</span>;
  }
  return (
    <div className="max-w-6xl mx-auto">
      <SectionHeading
        title="Featured "
        span="Facilities"
        dec="Advanced sports venues offer the latest facilities, dynamic and unique environments for enhanced badminton performance."
      />
      <div className="grid my-16 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {facilities?.data?.slice(0, 3).map((item: TFacilitiesDataType) => (
          <SingleFactureFacilities button="" item={item} />
        ))}
      </div>
      <div className="text-center">
        <button className="btn btn-neutral text-white">
          View All Facilities
          <MdOutlineArrowCircleRight className="text-xl" />
        </button>
      </div>
    </div>
  );
};

export default FeaturesFacilities;
