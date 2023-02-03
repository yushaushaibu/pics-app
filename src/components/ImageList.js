import React from 'react';

const ImageList = (props) => {
    const renderedImages = props.images.map(image => {
        return <img key={image.id} alt={image.description} src={image.urls.regular}/>
    })
    return <div>{renderedImages}</div>
};

export default ImageList;