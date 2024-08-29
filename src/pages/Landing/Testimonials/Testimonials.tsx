import SectionHeading from "../../../utils/SectionHeading";
import SingleTestimonials from "./SingleTestimonials";

const Testimonials = () => {
  return (
    <div className="py-20 bg-[#f9f9f6] px-4 xl:px-0 hidden md:block">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          title="Our  "
          span="Testimonials"
          dec="Glowing testimonials from passionate badminton enthusiasts worldwide, showcasing our exceptional services."
        />
        <div className="mt-16 ">
          <SingleTestimonials />
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
