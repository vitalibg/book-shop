import React from "react";

interface InputComponentProps {
  type: string;
  placeholder: string;
}

const InputComponent = ({ type, placeholder }: InputComponentProps) => {
  return <input type={type} placeholder={placeholder} />;
};

export default InputComponent;
