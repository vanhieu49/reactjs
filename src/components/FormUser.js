import React, { Component } from "react";
import { firebaseApp } from "../firebase";

class FormUser extends Component {
  handlSignOut = () => {
    firebaseApp.auth().signOut();
  };
  render() {
    let { user } = this.props;
    let xhtmlAdmin = user.infor.isAdmin ? <h4>Admin</h4> : "";
    return (
      <div>
        <h4>Email: {user.infor.email}</h4>
        <h4>UserID: {user.infor.uid}</h4>
        <h4>Website: {user.infor.website}</h4>
        {xhtmlAdmin}
        <button
          onClick={this.handlSignOut}
          type="submit"
          className="btn btn-success"
        >
          Logout
        </button>
      </div>
    );
  }
}

export default FormUser;
