import About from "../pages/about/About";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import Contact from "../pages/Contact/Contact";
import FacilitiesContainer from "../pages/facilities/FacilitiesContainer";
import FeatureDetails from "../pages/Landing/features/FeatureDetails";
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
    element: <FacilitiesContainer />,
  },
  {
    name: "Facility Details ",
    path: "/facilities/:id",
    element: <FeatureDetails />,
  },
  {
    name: "Login",
    path: "/login",
    element: <Login />,
  },
  {
    name: "Register",
    path: "/register",
    element: <Register />,
  },
];
