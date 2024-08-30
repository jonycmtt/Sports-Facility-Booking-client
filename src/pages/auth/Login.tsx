import { Button, Col, Divider } from "antd";
import MainForm from "../../components/form/MainForm";
import FormInput from "../../components/form/FormInput";
import { Link, useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../redux/hook";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { toast } from "sonner";
import { verifyToken } from "../../utils/verifyToken";
import GoogleLoginAuth from "../../utils/GoogleLogin";
import { useLoginMutation } from "../../redux/features/auth/authApi";
import { setUser, TUser } from "../../redux/features/auth/authSlice";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginValidationSchema } from "../../schemas/loginValidationSchema";
import { ApiError } from "../../types/global";

const Login = () => {
  console.log(import.meta.env.VITE_SECRET_GOOGLE_ID);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  // const defaultValues = {
  //   email: "jonyu@gmail.com",
  //   password: "123456",
  // };

  const [login] = useLoginMutation();

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const toastId = toast.loading("Login In...");

    try {
      const userInfo = {
        email: data.email,
        password: data.password,
      };
      const res = await login(userInfo).unwrap();
      if (res.success) {
        const loginUser = verifyToken(res.token) as TUser;
        dispatch(
          setUser({
            user: loginUser,
            token: res.token,
          })
        );
        toast.success("Login Success", { id: toastId, duration: 1000 });
        navigate("/");
      }
    } catch (error) {
      console.log(error);
      const apiError = error as ApiError;
      toast.error(apiError?.data?.message || "An error occurred", {
        id: toastId,
        duration: 1000,
      });
    }
  };
  return (
    <div className="flex bg-[#f9f9f6] justify-center items-center h-full py-12 px-4 xl:px-0">
      <Col
        span={7}
        xs={{ span: 24 }}
        sm={{ span: 20 }}
        md={{ span: 14 }}
        lg={{ span: 10 }}
        xl={{ span: 7 }}
        className="bg-white p-6 shadow rounded-lg"
      >
        <h2 className="text-2xl font-bold text-[#333] text-center ">Login</h2>

        <div className="my-6 text-center">
          <MainForm
            onSubmit={onSubmit}
            resolver={zodResolver(loginValidationSchema)}
          >
            <FormInput type={"email"} name={"email"} placeholder="Email" />
            <FormInput
              type={"password"}
              name={"password"}
              placeholder="Password"
            />
            <Link to="" className="text-blue-600 ">
              Forgot Password?
            </Link>
            <Button
              type="primary"
              size="large"
              className="btn-block mt-5"
              htmlType="submit"
            >
              Login
            </Button>
          </MainForm>
          <div className="mt-4">
            <span>
              Don't have an account ?{" "}
              <Link className="text-blue-400" to="/register">
                Register
              </Link>
            </span>
            <Divider>Or</Divider>
            <GoogleLoginAuth />
          </div>
        </div>
      </Col>
    </div>
  );
};

export default Login;
