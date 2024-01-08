import React from "react";
import LabelComponent from "./label.component";
import InputComponent from "./input.component";

interface InputComponentProps {
  label: string;
  type: string;
  placeholder: string;
}

const InputFieldComponent = ({ label, type, placeholder }: InputComponentProps) => {
  return (
    <>
      <LabelComponent text={label} />
      <InputComponent type={type} placeholder={placeholder} />
    </>
  );
};

export default InputFieldComponent;
