import { Button, Col, Divider } from "antd";
import MainForm from "../../components/form/MainForm";
import FormInput from "../../components/form/FormInput";
import { Link } from "react-router-dom";
import { GoogleCircleFilled } from "@ant-design/icons";
import FormTextArea from "../../components/form/FormTextArea";

export type TRegisterUser = {
  name: string;
  email: string;
  password: string;
  phone: string;
  address: string;
  role: string;
  profilePic: string;
};

const Register = () => {
  const onSubmit = (data: TRegisterUser) => {
    const registerInfo = {
      name: data.name,
      email: data.email,
      password: data.password,
      phone: data.phone,
      address: data.address,
      role: "user",
      profilePic: data.profilePic,
    };

    console.log(registerInfo);
  };
  return (
    <div className="flex min-h-screen bg-[#f9f9f6] justify-center items-center py-12">
      <Col span={7} className="bg-white p-6 shadow rounded-lg">
        <h2 className="text-2xl font-bold text-[#333] text-center ">
          Register Account
        </h2>

        <div className="my-6 text-center">
          <MainForm onSubmit={onSubmit}>
            <FormInput type={"text"} name={"name"} placeholder="Your Name" />
            <FormInput type={"email"} name={"email"} placeholder="Email" />
            <FormInput
              type={"password"}
              name={"password"}
              placeholder="Password"
            />
            <FormInput type="text" name={"phone"} placeholder="Phone Number" />
            <FormInput
              type="text"
              name={"address"}
              placeholder="Your Address"
            />
            <FormTextArea
              name={"profilePic"}
              placeholder="Profile Image link"
            />
            <Button
              type="primary"
              size="large"
              className="btn-block mt-5"
              htmlType="submit"
            >
              Register
            </Button>
          </MainForm>
          <div className="mt-4">
            <span>
              Already have an account ?{" "}
              <Link className="text-info" to="/login">
                Login
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

export default Register;
