import { CiCircleMore } from "react-icons/ci";
import { FaCircleCheck } from "react-icons/fa6";
import { LuUserCog2 } from "react-icons/lu";
import bgBeforeImage from "../../../assets/images/Untitled.png";

const Journey = () => {
  return (
    <div className="relative px-4 xl:px-0">
      <div className=" max-w-6xl mx-auto py-28 pb-32 grid grid-cols-1 lg:grid-cols-2 gap-20">
        <div>
          <h2 className="text-4xl font-bold text-[#333]">
            Start Your Journey With{" "}
            <span className="primary-liner ">Dreamsports</span> Badminton Today.
          </h2>
          <p className="text-sm my-6">
            At DreamSports Badminton, we prioritize your satisfaction and value
            your feedback as we continuously improve and evolve our learning
            experiences.
          </p>
          <p className="text-sm ">
            Our instructors utilize modern methods for effective badminton
            lessons, offering introductory sessions for beginners and
            personalized development plans to foster individual growth.
          </p>

          <div className="mt-8">
            <h2 className="font-semibold text-[#333]">
              Stay Ahead With Our Innovative Approach:
            </h2>
            <div className="flex items-start flex-col sm:flex-row justify-between my-6 mb-8">
              <ul className="space-y-3">
                <li className="flex items-center gap-2">
                  <FaCircleCheck className="text-[#333] text-xl" />
                  <span>Skilled Professionals</span>
                </li>
                <li className="flex items-center gap-2">
                  <FaCircleCheck className="text-xl text-[#333]" />
                  <span>Modern Techniques</span>
                </li>
                <li className="flex items-center gap-2">
                  <FaCircleCheck className="text-xl text-[#333]" />
                  <span>Intro Lesson</span>
                </li>
              </ul>
              <ul className="space-y-3">
                <li className="flex items-center gap-2">
                  <FaCircleCheck className="text-xl text-[#333]" />
                  <span>Personal Development</span>
                </li>
                <li className="flex items-center gap-2">
                  <FaCircleCheck className="text-xl text-[#333]" />
                  <span>Advanced Equipment</span>
                </li>
                <li className="flex items-center gap-2">
                  <FaCircleCheck className="text-xl text-[#333]" />
                  <span>Interactive Classes For Easy Learning.</span>
                </li>
              </ul>
            </div>
            <div className=" flex items-center gap-6">
              <button className="btn bg-[#097e52] text-white border-[#097e52] hover:bg-[#333] hover:text-white hover:border-[#333]">
                <LuUserCog2 className="text-lg" />
                Join With Us
              </button>
              <button className="btn bg-[#333] text-white border-[#333] hover:bg-[#097e52] hover:text-white hover:border-[#097e52]">
                <CiCircleMore className="text-lg" />
                Learn More
              </button>
            </div>
          </div>
        </div>
        <div>
          <img
            className="w-full h-full"
            src="https://dreamsports.dreamstechnologies.com/react/template/assets/img/journey-01.png"
            alt=""
          />
        </div>
      </div>
      <div
        className="absolute bottom-0 left-0 -z-10"
        style={{
          backgroundImage: `url(${bgBeforeImage})`,
          backgroundRepeat: "no-repeat",
        }}
      >
        <img
          className="w-52 "
          src="https://dreamsports.dreamstechnologies.com/react/template/static/media/bg-02.45a2309b79985992f3a8.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default Journey;
