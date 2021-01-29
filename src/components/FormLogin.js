import React, { Component } from 'react'
import { connect } from 'react-redux'
import { actLogin } from '../actions'

class FormLogin extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: ''
        }
    }
    handleChange = (event) => {
        let target = event.target;
        let value = (target.type === 'checkbox') ? target.checked : target.value;
        let name = target.name;
        this.setState({
            [name]: value
        })
    }
    handleSubmit = (event) => {
        let { username, password } = this.state;
        this.props.formLogin(username,password)
        event.preventDefault();
    }
    render() {
        return (
            <div className="row">
                <div className="box">
                    <div className="col-lg-12">
                        <hr />
                        <h2 className="intro-text text-center">Contact <strong>form</strong>
                        </h2>
                        <hr />
                        <p>This contact form is just the form elements, it is not a working form. You will have to make the form work by yourself, or take it out if you can't figure out how to make it work.</p>
                        <form onSubmit={this.handleSubmit}>
                            <div className="row">
                                <div className="form-group col-lg-6">
                                    <label>Username:</label>
                                    <input name="username" value={this.state.username} onChange={this.handleChange} type="text" className="form-control" />
                                </div>
                                <div className="form-group col-lg-6">
                                    <label>Password:</label>
                                    <input name="password" value={this.state.password} onChange={this.handleChange} type="password" className="form-control" />
                                </div>
                                <div className="clearfix" />
                                <div className="form-group col-lg-12">
                                    <input type="hidden" name="save" defaultValue="contact" />
                                    <button type="submit" className="btn btn-default">Submit</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        );
    }
}

let mapDispatchToProps = (dispatch, ownProps) => {
    return {
        formLogin: (username, password) => {
            dispatch(actLogin(username, password))
        }
    }
}
export default connect(null,mapDispatchToProps)(FormLogin);
