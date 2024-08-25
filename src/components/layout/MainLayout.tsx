import { Outlet } from "react-router-dom";
import Footer from "../../pages/footer/Footer";
import Navbar from "../../pages/Landing/Headers/Navbar";

const MainLayout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;
