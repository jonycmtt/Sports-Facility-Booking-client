import About from "../pages/about/About";
import Contact from "../pages/Contact/Contact";
import FacilitiesContant from "../pages/facilities/FacilitiesContant";
// import LandingPages from "../pages/Landing/LandingPages";

export const mainPaths = [
  {
    name: "About",
    path: "about",
    element: <About />,
  },
  {
    name: "Contact",
    path: "contact",
    element: <Contact />,
  },
  {
    name: "Facility ",
    path: "facilities",
    element: <FacilitiesContant />,
  },
];
