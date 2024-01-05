import React from "react";

interface IconComponentProps {
  icon: React.ReactNode;
}

const IconComponent = ({ icon }: IconComponentProps) => {
  return <span style={{ color: "gray", cursor: "pointer"}}>{icon}</span>;
};

export default IconComponent;
