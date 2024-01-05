import React from "react";

interface ParagraphComponentProps {
  text: string;
}

const ParagraphComponent = ({ text }: ParagraphComponentProps) => {
  return <p>{text}</p>;
};

export default ParagraphComponent;
