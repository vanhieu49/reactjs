import React, { Component } from 'react'
import { connect } from 'react-redux'
import { actLogOut } from '../actions'
class FormLogin extends Component {
    handleLogOut = (event) => {
        this.props.formLogOut()
        event.preventDefault();
    }
    render() {
        let {username} = this.props
        return (
            <div className="row">
                <div className="box">
                    <div className="col-lg-12">
                        <hr />
                        <h2 className="intro-text text-center"> <strong>User Control</strong>
                        </h2>
                        <hr />
                        <p>This contact form is just the form elements, it is not a working form. You will have to make the form work by yourself, or take it out if you can't figure out how to make it work.</p>
                        <form onSubmit={this.handleLogOut}>
                            <div className="row">
                                <div className="form-group col-lg-6">
                                    <label className="text-heading">Hello <strong> {username}</strong></label>
                                </div>
                                <div className="clearfix" />
                                <div className="form-group col-lg-12">
                                    <button type="submit" className="btn btn-default">Logout</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        );
    }
}

let mapDispatchToProps = (dispatch, ownProp) => {
    return {
        formLogOut: () => {
            dispatch(actLogOut())
        }
    }
}

export default connect(null,mapDispatchToProps)(FormLogin);
