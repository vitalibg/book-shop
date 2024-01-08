import React from "react";

interface LabelComponentProps {
  text: string;
}

const LabelComponent = ({ text }: LabelComponentProps) => {
  return <label>{text}</label>;
};

export default LabelComponent;
