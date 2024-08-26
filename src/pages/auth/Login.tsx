import { Button, Col, Divider } from "antd";
import MainForm from "../../components/form/MainForm";
import FormInput from "../../components/form/FormInput";
import { Link } from "react-router-dom";
import { GoogleCircleFilled } from "@ant-design/icons";

const Login = () => {
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div className="flex bg-[#f9f9f6] justify-center items-center h-screen">
      <Col span={7} className="bg-white p-6 shadow rounded-lg">
        <h2 className="text-2xl font-bold text-[#333] text-center ">Login</h2>

        <div className="my-6 text-center">
          <MainForm onSubmit={onSubmit}>
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
            <button className="btn border-[#ccc] btn-outline btn-neutral btn-block btn-md">
              <GoogleCircleFilled className="text-xl" />
              Login with Google
            </button>
          </div>
        </div>
      </Col>
    </div>
  );
};

export default Login;
