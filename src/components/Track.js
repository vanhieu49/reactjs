import React, { Component } from 'react'

class Track extends Component {
  render() {
    let { items } = (this.props)
    return (
      <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 track">
        <h4>{items.name}</h4>
        <audio src={items.preview_url} controls>Your browser does not support the audio element.</audio>
      </div>
    );
  }
}

export default Track;
