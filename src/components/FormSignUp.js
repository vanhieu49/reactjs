import React, { Component } from "react";
import { connect } from "react-redux";
import { firebaseApp, userRef } from "../firebase";
import { actChangeNoti } from "../actions";
import * as notify from "../constants/Notify";

class FormSignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      website: "",
    };
  }
  handleChange = (event) => {
    let target = event.target;
    let value = target.type === "checkbox" ? target.checked : target.value;
    let name = target.name;
    this.setState({
      [name]: value,
    });
  };
  hanldeSubmit = (event) => {
    let { email, password, website } = this.state;
    firebaseApp
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((data) => {
        userRef.child(data.user.uid).set({
          website: website,
          uid: data.user.uid,
          isAdmin: false,
        });
        this.props.changeNotify(
          notify.NOTI_TYPE_SUCCESS,
          notify.NOTI_SIGNUP_SUCCESSFULL_TITLE,
          notify.NOTI_SIGNUP_SUCCESSFULL_MESSAGE
        );
        this.setState({
          email: "",
          password: "",
          website: "",
        });
      })
      .catch((error) => {
        this.props.changeNotify(
          notify.NOTI_TYPE_DANGER,
          notify.NOTI_SIGNUP_FAIL_TITLE,
          error.message
        );
      });

    event.preventDefault();
  };
  render() {
    return (
      <form className="form-horizontal" onSubmit={this.hanldeSubmit}>
        <div className="form-group">
          <label htmlFor="inputEmail3" className="col-sm-2 control-label">
            Email
          </label>
          <div className="col-sm-6">
            <input
              value={this.state.email}
              onChange={this.handleChange}
              type="text"
              name="email"
              className="form-control"
              id="inputEmail3"
              placeholder="Email"
            />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="inputPassword3" className="col-sm-2 control-label">
            Password
          </label>
          <div className="col-sm-6">
            <input
              value={this.state.password}
              onChange={this.handleChange}
              type="text"
              name="password"
              className="form-control"
              id="inputPassword3"
              placeholder="Password"
            />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="inputEmail3" className="col-sm-2 control-label">
            Website
          </label>
          <div className="col-sm-6">
            <input
              value={this.state.website}
              onChange={this.handleChange}
              type="text"
              name="website"
              className="form-control"
              id="inputEmail3"
              placeholder="Website"
            />
          </div>
        </div>
        <div className="form-group">
          <div className="col-sm-offset-2 col-sm-6">
            <button type="submit" className="btn btn-success">
              Sign up
            </button>
          </div>
        </div>
      </form>
    );
  }
}

let mapDipatchToProps = (dispatch) => {
  return {
    changeNotify: (style, title, content) => {
      dispatch(actChangeNoti(style, title, content));
    },
  };
};

export default connect(null, mapDipatchToProps)(FormSignUp);
