import HeaderBanner from "../../utils/HeaderBanner";
import AboutImageGallery from "./AboutImageGallery";
import MissionStatement from "./MissionStatement";
import TeamSection from "./TeamSection";

const About = () => {
  return (
    <div>
      <HeaderBanner title="About Page" page="About us" />
      <div className="max-w-6xl mx-auto ">
        <AboutImageGallery />
        <MissionStatement />
        <TeamSection />
      </div>
    </div>
  );
};

export default About;
