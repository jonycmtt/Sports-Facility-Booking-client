import SectionHeading from "../../../utils/SectionHeading";

const HowItWorks = () => {
  return (
    <div className="max-w-6xl mx-auto my-20">
      <SectionHeading
        title={"How It "}
        span={"Works"}
        dec={
          "Simplifying the booking process for coaches, venues, and athletes."
        }
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-center mt-16 z-30">
        <div className="card card-bordered border-2 border-[#eee] bg-white group transition-all py-4">
          <div className="card-body items-center ">
            <div className="size-20 bg-[#fafafa] rounded-xl p-3 group-hover:rotate-45 transition-all group-hover:bg-[#097e52]">
              <img
                className="group-hover:brightness-200 group-hover:-rotate-45"
                src="https://dreamsports.dreamstechnologies.com/react/template/assets/img/icons/work-icon1.svg"
                alt="card"
              />
            </div>
            <h2 className="font-bold text-[#333] text-lg my-6">Join Us</h2>
            <p className="mb-4">
              Quick and Easy Registration: Get started on our software platform
              with a simple account creation process.
            </p>
            <button className="btn btn-outline group-hover:bg-neutral group-hover:text-white border-[#ccc] btn-neutral btn-block">
              Register Now
            </button>
          </div>
        </div>
        <div className="card card-bordered border-2 border-[#eee] bg-white group transition-all py-4">
          <div className="card-body items-center">
            <div className="size-20 bg-[#fafafa] rounded-xl p-3 group-hover:rotate-45 transition-all group-hover:bg-[#097e52]">
              <img
                className="group-hover:brightness-200 group-hover:-rotate-45"
                src="https://dreamsports.dreamstechnologies.com/react/template/assets/img/icons/work-icon2.svg"
                alt="card"
              />
            </div>
            <h2 className="font-bold text-[#333] text-lg my-6">
              Select Facilities{" "}
            </h2>
            <p className="mb-4">
              Book Badminton coaches and venues for expert guidance and premium
              facilities.
            </p>
            <button className="btn btn-outline group-hover:bg-neutral group-hover:text-white border-[#ccc] btn-neutral btn-block">
              Go to Facilities
            </button>
          </div>
        </div>
        <div className="card card-bordered border-2 border-[#eee] bg-white group transition-all py-4">
          <div className="card-body items-center">
            <div className="size-20 bg-[#fafafa] rounded-xl p-3 group-hover:rotate-45 transition-all group-hover:bg-[#097e52]">
              <img
                className="group-hover:brightness-200 group-hover:-rotate-45"
                src="https://dreamsports.dreamstechnologies.com/react/template/assets/img/icons/work-icon3.svg"
                alt="card"
              />
            </div>
            <h2 className="font-bold text-[#333] text-lg my-6">
              Booking Process
            </h2>
            <p className="mb-4">
              Easily book, pay, and enjoy a seamless experience on our
              user-friendly platform.
            </p>
            <button className="btn btn-outline border-[#ccc] group-hover:bg-neutral group-hover:text-white btn-neutral btn-block">
              Register Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
