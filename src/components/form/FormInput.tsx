import { Form, Input } from "antd";
import { Controller } from "react-hook-form";

type TInputProps = {
  type: string;
  name: string;
  placeholder?: string;
  label?: string;
};

const FormInput = ({ type, name, placeholder, label }: TInputProps) => {
  return (
    <div className="mb-4 text-left">
      <Controller
        name={name}
        render={({ field, fieldState: { error } }) => (
          <Form.Item label={label}>
            <Input
              {...field}
              type={type}
              size="large"
              id={name}
              placeholder={placeholder}
            />
            {error && (
              <small className="text-red-600 text-left">{error.message}</small>
            )}
          </Form.Item>
        )}
      />
    </div>
  );
};

export default FormInput;
