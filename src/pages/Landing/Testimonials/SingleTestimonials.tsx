import { useEffect, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Pagination } from "swiper/modules";
import { Rate } from "antd";

interface Testimonial {
  statue: string;
  feedback: string;
  image: string;
  name: string;
}

const SingleTestimonials = () => {
  // const [data, setData] = useState([]);
  const [data, setData] = useState<Testimonial[]>([]);

  useEffect(() => {
    fetch("testimonials.json")
      .then((response) => response.json())
      .then((result) => setData(result));
  }, []);

  return (
    <div className="">
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {data?.map((item, index) => (
          <SwiperSlide key={index} data-history="1">
            <div className="rounded-lg p-5 px-6 border">
              <div>
                <Rate className="text-sm" disabled defaultValue={2} />
                <h2 className="text-[#333] font-semibold my-4">
                  {item.statue}
                </h2>
                <p className="text-sm max-w-2xl mx-auto">"{item.feedback} "</p>
              </div>
              <div className="mt-10 flex items-start justify-start gap-4">
                <img src={item.image} alt="" />
                <h2 className="font-semibold my-4 text-[#333]">{item.name}</h2>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SingleTestimonials;
