export default function Input({
  name,
  placeholder,
  type = "text",
  value,
  onChange,
  required = true,
  ...rest
}) {
  return (
    <input
      id={name}
      type={type}
      name={name}
      placeholder={placeholder}
      className="mt-1 bg-gray-200 px-4 py-1 rounded w-full outline-none"
      onChange={onChange}
      value={value}
      required={required}
      {...rest}
    />
  );
}
