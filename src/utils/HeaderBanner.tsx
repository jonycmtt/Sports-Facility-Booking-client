import { RiArrowRightSLine } from "react-icons/ri";
import { Link } from "react-router-dom";

const HeaderBanner = ({ title, page }: { title: string; page: string }) => {
  return (
    <div className="relative headerBanner flex justify-center flex-col items-center  text-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-bold">{title}</h2>
        <div className="my-6">
          <ul className="flex items-center gap-1 justify-center">
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>
              <RiArrowRightSLine className="text-xl" />
            </li>
            <li>{page}</li>
          </ul>
        </div>
      </div>
      <div className="style-icon size-32  rounded-full absolute -bottom-16 right-20"></div>
      <div className="style-icon size-5  rounded-full absolute left-16 top-20"></div>
      <div className="style-icon size-10  rounded-full absolute right-16 top-20"></div>
      <div className="bg-[#23b33a] size-4  rounded-full absolute right-16 bottom-20"></div>
    </div>
  );
};

export default HeaderBanner;
