import React from "react";
import { RegisterView } from "./Register.view";

export default () => {
  const handleRegister = (value) => {
    console.log(value);
  };
  return (
    <>
      <RegisterView onSubmitRegister={handleRegister} />
    </>
  );
};
