import { Form, Select } from "antd";
import { Controller } from "react-hook-form";

const FormSelect = ({
  label,
  name,
  options,
  disabled,
}: {
  label: string;
  name: string;
  options: { value: string; label: string; disabled?: boolean }[] | undefined;
  disabled?: boolean;
}) => {
  return (
    <Controller
      name={name}
      render={({ field, fieldState: { error } }) => (
        <Form.Item label={label}>
          <Select
            defaultValue={"Select Option"}
            style={{ width: "100%" }}
            {...field}
            options={options}
            disabled={disabled}
          />
          {error && <small className="text-red-600">{error.message}</small>}
        </Form.Item>
      )}
    />
  );
};

export default FormSelect;
