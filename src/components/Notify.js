import React, { Component } from 'react'
import { connect } from 'react-redux'

class Notify extends Component {
    render() {
        return (
            <div className="alert alert-success" role="alert" id="mnotification">{this.props.notify}</div>
        )
    }
}

let mapStateToProps = state => {
    return {
        notify: state.notify
    }
}
export default connect(mapStateToProps, null)(Notify);