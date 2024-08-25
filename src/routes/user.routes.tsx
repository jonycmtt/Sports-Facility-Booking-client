import BookingItems from "../pages/dashboard/UserManagement/BookingItems";
import UserDashboard from "../pages/dashboard/UserManagement/UserDashboard";

export const userPaths = [
  {
    name: "Dashboard",
    path: "dashboard",
    element: <UserDashboard />,
  },
  {
    name: "Bookings",
    path: "bookings",
    element: <BookingItems />,
  },
];
