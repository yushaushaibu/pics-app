import React from "react";
import "./ImageList.css";

const ImageList = (props) => {
  const renderedImages = props.images.map((image) => {
    return <img key={image.id} alt={image.description} src={image.urls.regular}/>;
  });
  return <div className="image-list">{renderedImages}</div>;
};

export default ImageList;
