import Input from "./Input";
import InputLabel from "./InputLabel";

export default function InputGroup({
  label,
  name,
  placeholder,
  type = "text",
  value,
  required = true,
  onChange,
}) {
  return (
    <div className="mb-3">
      <InputLabel htmlFor={name}>{label}</InputLabel>
      <Input
        name={name}
        placeholder={placeholder}
        type={type}
        value={value}
        onChange={onChange}
        required={required}
      />
    </div>
  );
}
