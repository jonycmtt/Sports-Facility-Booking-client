import { HiViewGrid } from "react-icons/hi";
import { MdOutlineArrowCircleRight } from "react-icons/md";

const SiteBanner = () => {
  return (
    <div className="siteBanner py-16 text-white text-center space-y-4 relative overflow-hidden">
      <h2 className="text-4xl font-semibold ">
        Convenient & Flexible Scheduling
      </h2>
      <p>
        Find and book coaches conveniently with our online system that matches
        your <br />
        schedule and location.
      </p>
      <div className="py-4 flex items-center gap-4 justify-center">
        <button className="btn bg-[#097e52] text-white border-[#097e52] hover:bg-[#333] hover:text-white hover:border-[#333]">
          Book Now <MdOutlineArrowCircleRight className="text-xl" />
        </button>
        <button className="btn bg-[#333] text-white border-[#333] hover:bg-[#097e52] hover:text-white hover:border-[#097e52]">
          View Facilities <HiViewGrid className="text-xl" />
        </button>
      </div>
      <div className=" absolute -bottom-5 -right-5">
        <div className="relative">
          <img
            src="https://dreamsports.dreamstechnologies.com/react/template/assets/img/bg/cock-shape.png"
            alt=""
          />
          <img
            className="absolute w-32 -left-10 bottom-10"
            src="https://dreamsports.dreamstechnologies.com/react/template/assets/img/icons/cock-01.svg"
            alt=""
          />
          <img
            className="absolute w-20 right-10 top-6"
            src="https://dreamsports.dreamstechnologies.com/react/template/assets/img/icons/cock-02.svg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default SiteBanner;
