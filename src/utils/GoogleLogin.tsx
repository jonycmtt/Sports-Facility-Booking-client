/* eslint-disable @typescript-eslint/no-explicit-any */
import { GoogleLogin } from "@react-oauth/google";
import { toast } from "sonner";
import { verifyToken } from "./verifyToken";
import { useAppDispatch } from "../redux/hook";
import { useNavigate } from "react-router-dom";
import { setUser, TUser } from "../redux/features/auth/authSlice";
const GoogleLoginAuth = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const handleSuccess = (response: any) => {
    const userinfo = verifyToken(response.credential) as TUser;

    const loginUser = {
      user: {
        name: userinfo?.name,
        email: userinfo?.email,
        phone: "",
        address: "",
        role: "user",
        profilePic: userinfo?.picture,
      },
      iat: userinfo.iat,
      exp: userinfo.exp,
    };

    dispatch(
      setUser({
        user: loginUser,
        token: response.credential,
      })
    );
    toast.success("Login Success");
    navigate("/");
  };

  return (
    <>
      <button>
        <GoogleLogin
          onSuccess={handleSuccess}
          onError={() => {
            toast.error("Login Failed");
          }}
        />
      </button>
    </>
  );
};

export default GoogleLoginAuth;
