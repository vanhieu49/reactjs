import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Album extends Component {
  render() {
    let albums = { id: '', name: '', images: [{ url: '' }] };
    albums = this.props.albums !== null ? this.props.albums : albums;
    return (
      <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
        <div className="thumbnail">
          <img src={albums.images[2].url} alt={albums.name} className="img-responsive" />
          <div className="caption">
            <h5><Link to={`/album/${albums.id}`}>{albums.name}</Link></h5>
          </div>
        </div>
      </div>
    );
  }
}

export default Album;
