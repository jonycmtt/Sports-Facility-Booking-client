import { Button, Col, Row } from "antd";
import FormInput from "../../../../components/form/FormInput";
import MainForm from "../../../../components/form/MainForm";
import FormTextArea from "../../../../components/form/FormTextArea";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { useAddFacilityMutation } from "../../../../redux/features/facilities/facilitiesApi";
import { toast } from "sonner";
import { zodResolver } from "@hookform/resolvers/zod";
import facilityValidationSchema from "../../../../schemas/facilityValidationSchema";

interface ApiError {
  data: {
    message: string;
  };
}

const CreateFacilities = () => {
  const [addFacility] = useAddFacilityMutation();
  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const toastId = toast.loading("Facility Creating...");
    const dataInfo = {
      ...data,
      pricePerHour: parseFloat(data?.pricePerHour) || 0,
    };
    console.log(dataInfo);

    try {
      const result = await addFacility(dataInfo).unwrap();
      if (result.success) {
        toast.success("Facility Created", { id: toastId, duration: 1000 });
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
    <div>
      <h2 className="text-2xl font-bold">Create Facilities</h2>

      <Row>
        <Col span={24}>
          <MainForm
            onSubmit={onSubmit}
            resolver={zodResolver(facilityValidationSchema)}
          >
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
                  type={"text"}
                  name={"pricePerHour"}
                  label="Price Per Hour"
                  placeholder="Facility Price"
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
