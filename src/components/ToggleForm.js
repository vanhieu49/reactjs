import React, { Component } from 'react';
import { connect } from 'react-redux'
import { actToggleForm,actUnSelected } from '../actions'

class ToggleForm extends Component {

    handleToggle = () => {
        console.log(this.props.handleToggle())
        this.props.handleToggle();
    }
    render() {
        let { isShowForm } = this.props;
        let btnName = isShowForm ? 'Close Form' : 'Open Form';
        let btnClass = isShowForm ? 'btn-info' : 'btn-success'
        return (
            <button onClick={this.handleToggle} type="button" className={`btn btn-block ${btnClass}`}>{btnName}</button>
        );
    }
}
const mapStateToProps = state => {
    return {
        isShowForm: state.isShowForm
    }
}
let mapDispatchToProps = (dispatch, ownProp) => {
    return {
        handleToggle: () => {
            dispatch(actToggleForm())
            dispatch(actUnSelected())
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ToggleForm);