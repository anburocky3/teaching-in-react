import { memo } from "react";

const ChildPage2 = memo(({ value, updateChild }) => {
  console.log("Rendering ChildPage2 - ", value);

  return (
    <div className="flex items-center justify-between">
      <h3>Child Page 2 - {value}</h3>
      <button
        type="button"
        onClick={updateChild}
        className="px-2 py-1 rounded border hover:bg-gray-50"
      >
        Update Child2
      </button>
    </div>
  );
});

export default ChildPage2;
