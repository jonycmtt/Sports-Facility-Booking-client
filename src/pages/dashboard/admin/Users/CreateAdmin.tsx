import { Button, Col } from "antd";
import MainForm from "../../../../components/form/MainForm";
import FormInput from "../../../../components/form/FormInput";
import FormTextArea from "../../../../components/form/FormTextArea";

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
  const onSubmit = (data: TRegisterUser) => {
    const registerInfo = {
      name: data.name,
      email: data.email,
      password: data.password,
      phone: data.phone,
      address: data.address,
      role: "admin",
      profilePic: data.profilePic,
    };

    console.log(registerInfo);
  };
  return (
    <div className="flex justify-center items-center">
      <Col span={12} className="bg-white p-6 py-3 shadow rounded-lg">
        <h2 className="text-2xl font-bold text-[#333] text-center ">
          Create Admin
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
              Create Admin
            </Button>
          </MainForm>
        </div>
      </Col>
    </div>
  );
};

export default CreateAdmin;
