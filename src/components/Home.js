import React, { Component } from 'react'


class Home extends Component {
  render() {
    let { location } = this.props;
    console.log(location)
    return (
      <div >
        <h3>Home</h3>
      </div>
    );
  }
}

export default Home;
