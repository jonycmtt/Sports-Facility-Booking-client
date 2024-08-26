/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button, Col, Row } from "antd";
import FormInput from "../../components/form/FormInput";
import MainForm from "../../components/form/MainForm";
import FormTextArea from "../../components/form/FormTextArea";

const ContactForm = () => {
  const onSubmit = (data: any) => {
    console.log(data);
  };
  return (
    <Row className="my-12 max-w-6xl mx-auto">
      <Col span={24}>
        <MainForm onSubmit={onSubmit}>
          <Row gutter={20}>
            <Col span={24} md={{ span: 12 }}>
              <FormInput
                type={"text"}
                placeholder="Enter First Name"
                name={"firstName"}
                label="First Name"
              />
            </Col>
            <Col span={24} md={{ span: 12 }}>
              <FormInput
                type={"text"}
                placeholder="Enter Last Name"
                name={"email"}
                label="Last Name"
              />
            </Col>
            <Col span={24} md={{ span: 12 }}>
              <FormInput
                type={"email"}
                placeholder="Enter Email"
                name={"email"}
                label="Email"
              />
            </Col>
            <Col span={24} md={{ span: 12 }}>
              <FormInput
                type={"text"}
                placeholder="Enter Phone Number"
                name={"number"}
                label="Phone Number"
              />
            </Col>
            <Col span={24}>
              <FormInput
                type={"text"}
                placeholder="Subject"
                name={"subject"}
                label="Subject"
              />
            </Col>
            <Col span={24}>
              <FormTextArea name={"comment"} label="Comment" />
            </Col>
          </Row>
          <div className="text-center mt-6">
            <Button size="large" type="primary" htmlType="submit">
              Submit
            </Button>
          </div>
        </MainForm>
      </Col>
    </Row>
  );
};

export default ContactForm;
