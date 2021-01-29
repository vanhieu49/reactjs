import React, { Component } from 'react'
import { connect } from 'react-redux'
import FormSearch from '../components/FormSearch'
import ArtistList from '../components/ArtistList'
import { actGoHome } from '../actions'

class HomePage extends Component {
  componentDidMount() {
    this.props.changeHome()
  }
  render() {
    return (
      <div className="panel panel-info">
        <FormSearch />
        <ArtistList />
      </div>
    );
  }
}

let mapDispatchToProps = (dispatch, ownProps) => {
  return {
    changeHome: () => {
      dispatch(actGoHome())
    }
  }
}

export default connect(null, mapDispatchToProps)(HomePage);
