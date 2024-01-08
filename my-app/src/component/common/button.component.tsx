import React from "react";

interface ButtonComponentProps {
  content: string;
  onClick?: () => void;
  type?: "submit" | "reset" | "button";
}

const ButtonComponent = ({ content, onClick, type }: ButtonComponentProps) => {
  return (
    <button type={type} onClick={onClick}>
      {content}
    </button>
  );
};

export default ButtonComponent;
