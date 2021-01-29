import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import FormUser from "../components/FormUser";

class UserPage extends Component {
  render() {
    let { user } = this.props;
    if (user.isLogin === false) {
      return <Redirect to="/login" />;
    }
    return (
      <div className="panel panel-info">
        <div className="panel-heading">
          <h3 className="panel-title">User</h3>
        </div>
        <div className="panel-body">
          <FormUser user={user} />
        </div>
      </div>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

export default connect(mapStateToProps, null)(UserPage);
