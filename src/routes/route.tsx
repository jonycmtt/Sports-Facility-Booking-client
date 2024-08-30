import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Dashboard from "../pages/dashboard/Dashboard";
import { routesGenerator } from "../utils/routesGenerator";
import { adminPaths } from "./admin.routes";
import { userPaths } from "./user.routes";
import LandingPages from "../pages/Landing/LandingPages";
import ProtectedRoute from "../components/layout/ProtectedRoute";
import About from "../pages/about/About";
import Contact from "../pages/Contact/Contact";
import FacilitiesContainer from "../pages/facilities/FacilitiesContainer";
import FeatureDetails from "../pages/Landing/features/FeatureDetails";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import BookingContainer from "../pages/booking/BookingContainer";
import ErrorElement from "../pages/ErrorElement";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorElement />,
    children: [
      {
        path: "/",
        element: <LandingPages />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "facilities",
        element: <FacilitiesContainer />,
      },
      {
        path: "facility-details/:id",
        element: <FeatureDetails />,
      },
      {
        path: "booking-info/:id",
        element: (
          <ProtectedRoute role="user">
            <BookingContainer />
          </ProtectedRoute>
        ),
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
    ],
  },

  {
    path: "/admin",
    element: (
      <ProtectedRoute role="admin">
        <Dashboard />
      </ProtectedRoute>
    ),
    children: routesGenerator(adminPaths),
  },
  {
    path: "/user",
    element: (
      <ProtectedRoute role="user">
        <Dashboard />
      </ProtectedRoute>
    ),
    children: routesGenerator(userPaths),
  },
]);

export default router;
