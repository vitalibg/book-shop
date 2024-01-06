import React from "react";

interface IconComponentProps {
  icon: React.ReactNode;
}

const IconComponent = ({ icon }: IconComponentProps) => {
  return <span>{icon}</span>;
};

export default IconComponent;
