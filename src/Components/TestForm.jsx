import React from "react";

const TestForm = ({ handleSubmit }) => {
  return (
    <div>
      <input
        type="password"
        // style={{ display: "none" }}
        //   role="password"
        data-testid="password"
      />
      <button onClick={handleSubmit}>Enviar</button>
    </div>
  );
};

export default TestForm;
