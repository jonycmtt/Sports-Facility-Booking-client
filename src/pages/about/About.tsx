import HeaderBanner from "../../utils/HeaderBanner";
import NewsLetter from "../Landing/NewsLetter";
import Testimonials from "../Landing/Testimonials/Testimonials";
import AboutImageGallery from "./AboutImageGallery";
import ContactInfo from "./ContactInfo";
import HistoryAndMilestones from "./HistoryAndMilestones";
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
      <HistoryAndMilestones />
      <ContactInfo />
      <Testimonials />
      <NewsLetter />
    </div>
  );
};

export default About;
