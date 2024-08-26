import { FaRegEnvelope } from "react-icons/fa6";

const NewsLetter = () => {
  return (
    <div className="news-letter max-w-6xl mx-auto my-20 grid grid-cols-1 md:grid-cols-12 gap-16 items-center">
      <div className="col-span-5">
        <img
          src="https://dreamsports.dreamstechnologies.com/react/template/assets/img/subscribe-bg.jpg"
          alt=""
        />
      </div>
      <div className="col-span-7 text-white space-y-6">
        <img
          src="https://dreamsports.dreamstechnologies.com/react/template/assets/img/icons/subscribe.svg"
          alt=""
        />
        <div>
          <h2 className="text-4xl font-bold">Subscribe to Newsletter</h2>
          <p>Just for you, exciting badminton news updates.</p>
        </div>
        <div className="max-w-lg bg-white text-[#333] rounded-lg flex items-center justify-between py-2 px-4 gap-4">
          <FaRegEnvelope className="text-2xl " />
          <input
            placeholder="Enter Your Email Address"
            type="text"
            className=" w-full h-full bg-transparent outline-none"
          />
          <button className="btn bg-[#333] text-white border-[#333] hover:bg-[#097e52] hover:text-white hover:border-[#097e52]">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
