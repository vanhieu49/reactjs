import React, { Component } from "react";
import { connect } from "react-redux";
import { firebaseApp } from "../firebase";
import { actChangeNoti, actLogin } from "../actions";
import * as notify from "../constants/Notify";

class FormSign extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
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
  handSubmit = (event) => {
    let { email, password } = this.state;
    firebaseApp
      .auth()
      .signInWithEmailAndPassword(email, password)
    //   .then((userCredential) => {
    //     // Signed in
    //     let { email, uid } = userCredential.user;
    //     let data = { email, uid };
    //     this.props.singIn(data);
    //     console.log("login success");
    //     // ...
    //   })
      .catch((error) => {
        this.props.changeNotify(
          notify.NOTI_TYPE_WARNING,
          notify.NOTI_LOGIN_FAIL_TITLE,
          error.message
        );
      });
    event.preventDefault();
  };
  render() {
    return (
      <form className="form-horizontal" onSubmit={this.handSubmit}>
        <div className="form-group">
          <label className="col-sm-2 control-label">Email</label>
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
          <div className="col-sm-offset-2 col-sm-6">
            <button type="submit" className="btn btn-success">
              Sign In
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
    singIn: (user) => {
      dispatch(actLogin(user));
    },
  };
};

export default connect(null, mapDipatchToProps)(FormSign);
