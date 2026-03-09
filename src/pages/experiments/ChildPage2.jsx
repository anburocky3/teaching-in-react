import { memo } from "react";

const ChildPage2 = memo(({ value }) => {
  console.log("Rendering ChildPage2 - ", value);

  return <h3>Child Page 2 - {value}</h3>;
});

export default ChildPage2;
