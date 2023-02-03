import React from 'react';

const ImageList = (props) => {
    const renderedImages = props.images.map(image => {
        return <img alt={image.description} src={image.urls.regular}/>
    })
    return <div>{renderedImages}</div>
};

export default ImageList;