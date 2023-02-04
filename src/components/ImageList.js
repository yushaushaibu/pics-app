import React from "react";
import "./ImageList.css";
import ImageCard from "./ImageCard";

const ImageList = (props) => {
  const renderedImages = props.images.map((image) => {
    return <ImageCard key={image.id} image={image}/>;
  });
  return <div className="image-list">{renderedImages}</div>;
};

export default ImageList;
