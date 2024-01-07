import React from "react";

interface ImageComponentProps {
  image: string;
}

const ImageComponent = ({ image }: ImageComponentProps) => {
  return <img src={image} alt={"picture"} />;
};

export default ImageComponent;
