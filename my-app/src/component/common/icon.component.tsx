import React from "react";

interface IconProps {
  icon: React.ReactNode;
}

const IconComponent = ({ icon }: IconProps) => {
  return <span style={{ color: "gray", cursor: "pointer"}}>{icon}</span>;
};

export default IconComponent;
