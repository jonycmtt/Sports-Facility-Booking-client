import HeaderBanner from "../../utils/HeaderBanner";
import ContactInfo from "../about/ContactInfo";
import ContactForm from "./ContactForm";
import GoogleMap from "./GoogleMap";

const Contact = () => {
  return (
    <div className="">
      <HeaderBanner title={"Contact Us"} page={"Contact us"} />
      <ContactInfo />

      <div className="mb-12 max-w-6xl mx-auto">
        <GoogleMap />
      </div>
      <div className="bg-[#f9f9f6]  py-1">
        <h2 className="text-3xl mt-16 font-bold text-[#333] text-center">
          Reach out to us and let's smash your inquiries
        </h2>

        <ContactForm />
      </div>
    </div>
  );
};

export default Contact;
