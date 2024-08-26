import HeaderBanner from "../../utils/HeaderBanner";
import AboutImageGallery from "./AboutImageGallery";
import MissionStatement from "./MissionStatement";

const About = () => {
  return (
    <div>
      <HeaderBanner title="About Page" page="About us" />
      <div className="max-w-6xl mx-auto ">
        <AboutImageGallery />
        <MissionStatement />
      </div>
    </div>
  );
};

export default About;
