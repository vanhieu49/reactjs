import React, { Component } from 'react'
import FormSearch from '../components/FormSearch'
import ArtistList from '../components/ArtistList'

class NotFoundPage extends Component {
  render() {
    return (
        <div className="panel panel-info">
          <FormSearch/>
          <ArtistList/>
      </div>
    );
  }
}

export default NotFoundPage;
