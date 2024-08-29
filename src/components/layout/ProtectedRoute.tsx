import { ReactNode } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import { Navigate } from "react-router-dom";
import {
  logout,
  selectCurrentToken,
} from "../../redux/features/auth/authSlice";
import { verifyToken } from "../../utils/verifyToken";

interface VerifiedUser {
  user: {
    role: string;
    // add other properties if needed
  };
}

type TProtectedRoute = {
  children: ReactNode;
  role?: string | undefined;
};
const ProtectedRoute = ({ children, role }: TProtectedRoute) => {
  const token = useAppSelector(selectCurrentToken);
  console.log(token);
  let user;

  if (token) {
    user = verifyToken(token) as VerifiedUser;
  }

  console.log(user);
  const dispatch = useAppDispatch();

  if (role !== undefined && role !== user?.user?.role) {
    dispatch(logout());
    return <Navigate to="/login" replace={true} />;
  }
  if (!token) {
    return <Navigate to="/login" replace={true} />;
  }

  return children;
};

export default ProtectedRoute;
