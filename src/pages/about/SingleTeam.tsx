import { BsInstagram, BsTwitter } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa6";
import { LiaLinkedin } from "react-icons/lia";

const SingleTeam = ({ item }) => {
  const { name, position, image, category, description } = item;
  return (
    <div className="relative group cursor-pointer transition-all card card-bordered h-[430px] overflow-hidden">
      <img className="w-full h-full object-cover" src={image} alt="" />
      <div className="w-full group-hover:h-1/2  absolute transition-all bottom-0 py-2 left-0  text-center bg-black opacity-75 z-10">
        <h2 className="text-white font-bold text-xl z-20">{name}</h2>
        <h3 className="text-white z-20 group-hover:hidden">{position}</h3>
        <h3 className="text-white z-20 text-sm font-bold hidden group-hover:block">
          {category}
        </h3>
        <p className="text-sm text-[#ccc] hidden group-hover:block my-4">
          {description}
        </p>
        <ul className="hidden group-hover:flex  justify-center my-6 items-center gap-4 text-lg w-full">
          <li>
            <a href="#">
              <FaFacebook />
            </a>
          </li>
          <li>
            <a href="#">
              <LiaLinkedin />
            </a>
          </li>
          <li>
            <a href="#">
              <BsInstagram />
            </a>
          </li>
          <li>
            <a href="#">
              <BsTwitter />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SingleTeam;
