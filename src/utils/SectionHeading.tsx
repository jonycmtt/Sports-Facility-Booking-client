import { TSectionHeading } from "../types";

const SectionHeading = ({ title, dec, span }: TSectionHeading) => {
  return (
    <div className="text-center relative">
      <h2 className="text-4xl font-bold text-[#333]">
        {title} <span className="primary-liner">{span}</span>
      </h2>
      <p>{dec}</p>
      <div className="flex justify-center items-center absolute w-full">
        <img
          src="https://dreamsports.dreamstechnologies.com/react/template/assets/img/icons/work-cock.svg"
          alt=""
        />
      </div>
    </div>
  );
};

export default SectionHeading;
