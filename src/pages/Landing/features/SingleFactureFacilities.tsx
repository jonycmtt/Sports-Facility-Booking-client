import { CiLocationOn } from "react-icons/ci";
import { FaRegHeart } from "react-icons/fa6";
import { Link } from "react-router-dom";

export type TFacilitiesDataType = {
  description: string;
  image: string;
  location: string;
  name: string;
  pricePerHour: number;
  _id: string;
};

const SingleFactureFacilities = ({
  item,
  button,
}: {
  item: TFacilitiesDataType;
  button: string;
}) => {
  console.log(item);
  const { description, image, location, name, pricePerHour, _id } = item;
  return (
    <div className="relative card card-bordered shadow-sm overflow-hidden">
      <Link to={`/facility-details/${_id}`} className="h-60">
        <img className="w-full h-full" src={image} alt={name} />
      </Link>
      <div className="mt-4 p-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3">
            <h2 className="font-semibold text-white size-8 bg-[#FFAA00] inline-flex items-center justify-center rounded">
              4.2
            </h2>
            <span className="text-sm text-[#6B7385]">3000 Reviews</span>
          </div>
          <FaRegHeart className="text-xl text-black cursor-pointer hover:text-[#097E52]" />
        </div>
        <div className="my-3">
          <Link to={`/facility-details/${_id}`}>
            <h2 className="text-lg font-bold text-[#333]">{name}</h2>
          </Link>
          <p className="text-[#6B7385] my-3">{description.slice(0, 100)}...</p>
          <div className="flex items-center gap-2 my-3">
            <CiLocationOn />
            <span>{location}</span>
          </div>
          <div className="text-center mt-8">
            {button ? (
              <Link to={`/facility-details/${_id}`}>
                <button className="btn btn-neutral btn-sm border-[#ccc] btn-outline btn-block">
                  {button}
                </button>
              </Link>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
      <div className="flex p-4 w-full justify-between absolute top-0 left-0">
        <div className="bg-[#0CAEF4] text-white text-sm p-2 rounded-md">
          <h2>Featured</h2>
        </div>

        <div className="bg-[#097E52] text-white text-sm p-2 rounded-md">
          <h3>${pricePerHour}/hr</h3>
        </div>
      </div>
    </div>
  );
};

export default SingleFactureFacilities;
