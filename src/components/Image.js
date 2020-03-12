import React, { Component } from 'react'
import ImageContainer from './ImageContainer'

export default class Image extends Component {
  render() {
    console.log("Image PROPS", this.props);
    return (
      <div>
        <ImageContainer />
      </div>
    )
  }
}
