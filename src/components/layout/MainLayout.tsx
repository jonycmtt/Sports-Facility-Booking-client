import { Outlet } from "react-router-dom";
import Footer from "../../pages/footer/Footer";
import Navbar from "../../pages/Landing/Headers/Navbar";

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default MainLayout;
