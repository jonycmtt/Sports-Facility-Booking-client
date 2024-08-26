import FeaturesFacilities from "./features/FeaturesFacilities";
import Header from "./Headers/Header";
import Journey from "./journey/Journey";
import NewsLetter from "./NewsLetter";
import Services from "./Services/Services";
import SiteBanner from "./siteBanner/SiteBanner";
import Testimonials from "./Testimonials/Testimonials";
import HowItWorks from "./Works/HowItWorks";

const LandingPages = () => {
  return (
    <div>
      <Header />
      <HowItWorks />
      <FeaturesFacilities />
      <Services />
      <SiteBanner />
      <Testimonials />
      <Journey />
      <NewsLetter />
    </div>
  );
};

export default LandingPages;
