import { GoogleLogin } from "@react-oauth/google";
import { toast } from "sonner";
import { verifyToken } from "./verifyToken";
import { setUser, TUser } from "../redux/features/authSlice";
import { useAppDispatch } from "../redux/hook";
import { useNavigate } from "react-router-dom";

const GoogleLoginAuth = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const handleSuccess = (response: any) => {
    const userinfo = verifyToken(response.credential) as TUser;
    console.log(userinfo);

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
    console.log(loginUser);
    dispatch(
      setUser({
        loginUser,
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
