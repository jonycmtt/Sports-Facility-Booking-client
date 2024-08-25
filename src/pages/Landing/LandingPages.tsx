import FeaturesFacilities from "./features/FeaturesFacilities";
import Header from "./Headers/Header";
import Services from "./Services/Services";
import SiteBanner from "./siteBanner/SiteBanner";
import HowItWorks from "./Works/HowItWorks";

const LandingPages = () => {
  return (
    <div>
      <Header />
      <HowItWorks />
      <FeaturesFacilities />
      <Services />
      <SiteBanner />
    </div>
  );
};

export default LandingPages;
