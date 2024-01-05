import React from "react";

interface TextComponentProps {
  text: string;
}

const TextComponent = ({ text }: TextComponentProps) => {
  return <span>{text}</span>;
};

export default TextComponent;
