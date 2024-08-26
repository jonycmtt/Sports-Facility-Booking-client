import { Button, Col, Row } from "antd";
import FormInput from "../../../../components/form/FormInput";
import MainForm from "../../../../components/form/MainForm";
import FormTextArea from "../../../../components/form/FormTextArea";

export type TFacilitiesData = {
  name: string;
  description: string;
  pricePerHour: number;
  location: string;
  image: string;
};

const CreateFacilities = () => {
  const onSubmit = (data: TFacilitiesData) => {
    console.log(data);
  };
  return (
    <div>
      <h2 className="text-2xl font-bold">Create Facilities</h2>

      <Row>
        <Col span={24}>
          <MainForm onSubmit={onSubmit}>
            <Row gutter={12}>
              <Col span={24} md={{ span: 8 }}>
                <FormInput
                  type={"text"}
                  name={"name"}
                  label="Facility Name"
                  placeholder="Facility Name"
                />
              </Col>

              <Col span={24} md={{ span: 8 }}>
                <FormInput
                  type={"number"}
                  name={"pricePerHour"}
                  label="Price Per Hour"
                  placeholder="Facility Name"
                />
              </Col>
              <Col span={24} md={{ span: 8 }}>
                <FormInput
                  type={"text"}
                  name={"location"}
                  label="location"
                  placeholder="location"
                />
              </Col>
              <Col span={24} md={{ span: 24 }}>
                <FormTextArea
                  name={"image"}
                  label="Image"
                  placeholder="Image Link Here"
                />
              </Col>
              <Col span={24} md={{ span: 24 }}>
                <FormTextArea
                  name={"description"}
                  label="Description"
                  placeholder="Description"
                />
              </Col>
            </Row>
            <Button htmlType="submit" type="primary" size="large">
              Create Facility
            </Button>
          </MainForm>
        </Col>
      </Row>
    </div>
  );
};

export default CreateFacilities;
