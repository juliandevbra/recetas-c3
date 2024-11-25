import React, { useState } from "react";
import ChildComponent from "./ChildComponent";

const ParentComponent = () => {
  // const [salario, setSalario] = useState(150000);
  return (
    <div className="parent">
      <h1>ParentComponent</h1>
      <ChildComponent />
      {/* <p>Salario: {salario}</p> */}
    </div>
  );
};

export default ParentComponent;
