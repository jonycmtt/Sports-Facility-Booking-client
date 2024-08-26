import AdminDashboard from "../pages/dashboard/admin/AdminDashboard";
import Bookings from "../pages/dashboard/admin/bookings/Bookings";
import CreateFacilities from "../pages/dashboard/admin/facilites/CreateFacilities";
import AllUsers from "../pages/dashboard/admin/Users/AllUsers";
import CreateAdmin from "../pages/dashboard/admin/Users/CreateAdmin";
import FacilitiesContant from "../pages/facilities/FacilitiesContant";

export const adminPaths = [
  {
    name: "Dashboard",
    path: "dashboard",
    element: <AdminDashboard />,
  },
  {
    name: "Manage Facilities",
    children: [
      {
        name: "Create Facilities",
        path: "create-facilities",
        element: <CreateFacilities />,
      },
      {
        name: "Facilities",
        path: "facilities",
        element: <FacilitiesContant />,
      },
    ],
  },

  {
    name: "Users",
    children: [
      {
        name: "Create Admin",
        path: "create-admin",
        element: <CreateAdmin />,
      },
      {
        name: "All Users",
        path: "users",
        element: <AllUsers />,
      },
    ],
  },
  {
    name: "Bookings",
    path: "bookings",
    element: <Bookings />,
  },
];
