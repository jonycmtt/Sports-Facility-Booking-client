/* eslint-disable @typescript-eslint/no-unused-vars */
import { Button, Col, Divider } from "antd";
import MainForm from "../../components/form/MainForm";
import FormInput from "../../components/form/FormInput";
import { Link, useNavigate } from "react-router-dom";
import { GoogleCircleFilled } from "@ant-design/icons";
import FormTextArea from "../../components/form/FormTextArea";
import { zodResolver } from "@hookform/resolvers/zod";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { registerValidationSchema } from "../../schemas/registerValidationSchema";
import { toast } from "sonner";
import { useSignupMutation } from "../../redux/features/auth/authApi";

const Register = () => {
  const [signupUser] = useSignupMutation();
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const toastId = toast.loading("Creating Account");
    try {
      const result = await signupUser(data).unwrap();
      if (result.error) {
        toast.error(result.error.data.message, { id: toastId, duration: 1000 });
      } else {
        toast.success("Crated Account", { id: toastId, duration: 1000 });
        navigate("/login");
      }
    } catch (error) {
      toast.error("something went wrong!", { id: toastId, duration: 1000 });
    }
  };
  return (
    <div className="flex min-h-screen bg-[#f9f9f6] justify-center items-center py-12">
      <Col
        span={12}
        xs={{ span: 24 }}
        sm={{ span: 20 }}
        md={{ span: 14 }}
        lg={{ span: 10 }}
        xl={{ span: 7 }}
        className="bg-white p-6 shadow rounded-lg"
      >
        <h2 className="text-2xl font-bold text-[#333] text-center ">
          Register Account
        </h2>

        <div className="my-6 text-center">
          <MainForm
            onSubmit={onSubmit}
            resolver={zodResolver(registerValidationSchema)}
          >
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
