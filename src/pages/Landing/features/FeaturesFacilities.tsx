import { MdOutlineArrowCircleRight } from "react-icons/md";
import SectionHeading from "../../../utils/SectionHeading";

const FeaturesFacilities = () => {
  return (
    <div>
      <SectionHeading
        title="Featured "
        span="Facilities"
        dec="Advanced sports venues offer the latest facilities, dynamic and unique environments for enhanced badminton performance."
      />
      <div className="h-52"></div>
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
