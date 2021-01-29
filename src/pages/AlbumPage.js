import React, { Component } from 'react'
import { connect } from 'react-redux'

import { getAlbum } from '../services/SpotifyAxios'
import Track from '../components/Track'
import { actAlbum } from '../actions'

class AlbumPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      album: null,
      track: []
    }
  }
  componentDidMount() {
    let id = this.props.match.params.id;
    this.loadGetAlbum(id)
  }
  loadGetAlbum = (id) => {
    getAlbum(id)
      .then(res => {
        if (res !== undefined && res.data !== null) {
          this.setState({
            album: res.data
          })
          this.props.changeBreadcrumd(`/album/${res.data.id}`, res.data.name)
        }
      })
  }
  showImage = (item) => {
    let xhtml = null;
    if (item !== null && item.length > 0) {
      xhtml = <img className="media-object img-thumbnail" src={item[0].url} alt="singer" />
    }
    return xhtml;
  }
  showTrach = (track) => {
    let xhtml = null;
    if (track !== null && track.length > 0) {
      xhtml = track.map((item, index) => {
        return <Track key={index} items={item} />
      })
    }
    return xhtml;
  }
  render() {
    let album = { id: '', name: '', images: [], tracks: { items: [] } }
    album = this.state.album !== null ? this.state.album : album
    return (
      <div className="panel panel-danger">
        <div className="panel-heading">
          <h3 className="panel-title">{album.name}</h3>
        </div>
        <div className="panel-body">
          <div className="row">
            <div className="col-sm-4 col-md-4 col-lg-4">
              {this.showImage(album.images)}
            </div>
            <div className="col-sm-8 col-md-8 col-lg-8">
              <div className="panel panel-warning">
                <div className="panel-heading">
                  <h3 className="panel-title">List Tracks</h3>
                </div>
                <div className="panel-body">
                  {this.showTrach(album.tracks.items)}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    );
  }
}

let mapDispatchToProps = (dispatch, owProps) => {
  return {
    changeBreadcrumd: (to, name) => {
      dispatch(actAlbum(to, name))
    }
  }
}
export default connect(null, mapDispatchToProps)(AlbumPage);
