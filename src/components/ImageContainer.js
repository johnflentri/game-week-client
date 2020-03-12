import React, { Component } from 'react'
import { connect } from "react-redux";

class ImageContainer extends Component {
  render() {
    console.log("ImageContainer PROPS", this.props);
    const imageList = this.props.images.map(image => <img key={image.id} src={image.url} />)
    return imageList
  }
}

function mapStateToProps(state) {
  console.log("State in ImageContainer", state);

  return {
    images: state.imageReducer
  }
}

export default connect(mapStateToProps)(ImageContainer);

