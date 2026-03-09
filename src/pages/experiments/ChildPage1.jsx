import { memo } from "react";

const ChildPage1 = memo(({ value }) => {
  console.log("Rendering ChildPage1 ", value);

  return <h3>Child Page 1 - {value}</h3>;
});

export default ChildPage1;
