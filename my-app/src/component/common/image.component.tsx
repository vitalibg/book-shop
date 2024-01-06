import React from "react";

interface ImageComponentProps {
  image: string;
  title: string;
}

const ImageComponent = ({ image, title }: ImageComponentProps) => {
  return <img src={image} alt={title} />;
};

export default ImageComponent;
