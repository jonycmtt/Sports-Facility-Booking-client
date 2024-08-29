import { Button, Col } from "antd";
import MainForm from "../../../../components/form/MainForm";
import FormInput from "../../../../components/form/FormInput";
import FormTextArea from "../../../../components/form/FormTextArea";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { toast } from "sonner";
import { useSignupMutation } from "../../../../redux/features/auth/authApi";
import { useNavigate } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerValidationSchema } from "../../../../schemas/registerValidationSchema";

export type TRegisterUser = {
  name: string;
  email: string;
  password: string;
  phone: string;
  address: string;
  role: string;
  profilePic: string;
};

const CreateAdmin = () => {
  const [signupUser] = useSignupMutation();
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const toastId = toast.loading("Creating Account");
    const adminDataInfo = {
      ...data,
      role: "admin",
    };
    try {
      const result = await signupUser(adminDataInfo).unwrap();
      if (result.error) {
        toast.error(result.error.data.message, { id: toastId, duration: 1000 });
      } else {
        toast.success("Crated Admin Account", { id: toastId, duration: 1000 });
        navigate("/admin/users");
      }
    } catch (error) {
      console.log(error);
      toast.error("something went wrong!", { id: toastId, duration: 1000 });
    }
  };
  return (
    <div className="flex justify-center items-center">
      <Col
        span={12}
        xs={{ span: 24 }}
        sm={{ span: 20 }}
        md={{ span: 14 }}
        lg={{ span: 10 }}
        xl={{ span: 12 }}
        className="bg-white p-6 py-3 shadow rounded-lg"
      >
        <h2 className="text-2xl font-bold text-[#333] text-center ">
          Create Admin
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
              Create Admin
            </Button>
          </MainForm>
        </div>
      </Col>
    </div>
  );
};

export default CreateAdmin;
