export default function InputLabel({ htmlFor, children, ...rest }) {
  return (
    <label className="block font-medium text-sm" htmlFor={htmlFor} {...rest}>
      {children}
    </label>
  );
}
