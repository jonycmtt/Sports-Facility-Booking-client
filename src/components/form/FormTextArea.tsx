import { Form } from "antd";
import TextArea from "antd/es/input/TextArea";
import { Controller } from "react-hook-form";

type TInputProps = {
  type?: string;
  name: string;
  placeholder?: string;
  label?: string;
};

const FormTextArea = ({ name, label }: TInputProps) => {
  return (
    <div className="mb-4">
      <Controller
        name={name}
        render={({ field, fieldState: { error } }) => (
          <Form.Item label={label}>
            <TextArea
              {...field}
              id={name}
              autoSize={{ minRows: 3, maxRows: 5 }}
              placeholder={"Enter Comment"}
            />
            {error && <small className="text-red-600">{error.message}</small>}
          </Form.Item>
        )}
      />
    </div>
  );
};

export default FormTextArea;
