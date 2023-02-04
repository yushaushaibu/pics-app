import React, { Component, createRef } from "react";

class ImageCard extends Component {
  constructor(props) {
    super(props);

    this.imageRef = createRef();
  }

  componentDidMount() {
    console.log(this.imageRef.current.clientHeight);
  }
  render() {
    const { description, urls } = this.props.image;
    return (
      <div>
        <img ref={this.imageRef} alt={description} src={urls.regular} />
      </div>
    );
  }
}

export default ImageCard;
