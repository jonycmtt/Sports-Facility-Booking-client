import { Button, Col, Row } from "antd";
import FormInput from "../../../../components/form/FormInput";
import MainForm from "../../../../components/form/MainForm";
import FormTextArea from "../../../../components/form/FormTextArea";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { useAddFacilityMutation } from "../../../../redux/features/facilities/facilitiesApi";
import { toast } from "sonner";

// export type TFacilitiesData = {
//   name: string;
//   description: string;
//   pricePerHour: number;
//   location: string;
//   image: string;
// };

const CreateFacilities = () => {
  const [addFacility] = useAddFacilityMutation();
  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const toastId = toast.loading("Facility Creating...");
    const dataInfo = {
      ...data,
      pricePerHour: Number(data.pricePerHour),
    };

    try {
      const result = await addFacility(dataInfo).unwrap();
      if (result.success) {
        toast.success("Facility Created", { id: toastId, duration: 1000 });
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong", { id: toastId, duration: 1000 });
    }
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
