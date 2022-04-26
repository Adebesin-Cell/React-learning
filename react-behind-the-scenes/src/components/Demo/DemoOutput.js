import React from "react";

const DemoOutput = function (props) {
  console.log("DEMO OUPUT RUNNING");
  return <p>{props.show ? "This is new" : ""}</p>;
};

export default React.memo(DemoOutput);
