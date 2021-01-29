import React, { Component } from 'react'
import { connect } from 'react-redux'
import Album from '../components/Album'
import { getArtistId, getAlbumId } from '../services/SpotifyAxios'
import { actAstist } from '../actions'

class ArtistPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      artist: null,
      albums: []
    }
  }
  componentDidMount() {
    let { match } = this.props
    let id = match.params.id
    this.loadGetArtistId(id)
    this.loadGetAlbumId(id)
  }
  loadGetAlbumId = (id) => {
    getAlbumId(id)
      .then(res => {
        if (res !== undefined && res.data !== null) {
          this.setState({
            albums: res.data.items
          })
        }
      })
  }
  loadGetArtistId = (id) => {
    getArtistId(id)
      .then(res => {
        if (res !== undefined && res.data !== null) {
          this.setState({
            artist: res.data
          })
          this.props.changeBreadcrumd(`/artist/${res.data.id}`, res.data.name)
        }

      })
  }
  showItem = (item) => {
    let xhtml = null;
    if (item.images !== null && item.images.length > 1) {
      xhtml = <img src={item.images[0].url} alt={item.name} className="img-rounded img-responsive" />
    }
    return xhtml
  }
  showGenres = (item) => {
    let xhtml = null;
    if (item !== null && item.length > 0) {
      xhtml = item.map((genres, index) => {
        return <span key={index} className="label label-warning" style={{ marginRight: 5 }}>{genres}</span>
      })
    }
    return xhtml;
  }
  showAlbum = (albums) => {
    let xhtml = null;
    if (albums !== null && albums.length > 0) {
      return albums.map((item, index) => {
        return xhtml = <Album key={index} albums={item} index={index} />
      })
    }
    return <div className="panel-body list-albums">{xhtml}</div>
  }
  render() {
    let artist = {
      id: '',
      type: '',
      name: '',
      external_urls: {},
      genres: [],
      images: [{ url: '' }]
    }
    let albums = {
      id: '',
      name: '',
      images: [{ url: '' }]
    }
    artist = this.state.artist !== null ? this.state.artist : artist
    albums = this.state.albums !== null ? this.state.albums : albums;
    return (
      <div className="panel panel-info">
        <div className="panel-heading">
          <h3 className="panel-title">{artist.type}</h3>
        </div>
        <div className="panel-body">
          <div className="panel-body">
            <div className="col-sm-4 col-md-4">
              {this.showItem(artist)}
              <blockquote style={{ marginTop: 20 }}>
                <p>{artist.name}</p>
              </blockquote>
              <p><i className="glyphicon glyphicon-play-circle" />
                <a rel="noopener noreferrer" target="_blank" href={artist.external_urls.spotify}> View Spotify</a>
                <br /><br />
                <i className="glyphicon glyphicon-play-circle" /> Genres:
            {this.showGenres(artist.genres)}</p>
            </div>
            <div className="col-sm-8 col-md-8">
              <div className="panel panel-danger">
                <div className="panel-heading">
                  <h3 className="panel-title">List Albums</h3>
                </div>
                <div className="panel-body list-albums">
                  {this.showAlbum(albums)}
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
      dispatch(actAstist(to, name))
    }
  }
}

export default connect(null, mapDispatchToProps)(ArtistPage);
