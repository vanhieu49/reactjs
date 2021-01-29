import React, { Component } from "react";
import { connect } from "react-redux";
import TaskDoingList from "../components/TaskDoingList";
import TaskFinishList from "../components/TaskFinishList";
import TaskFinishListAdmin from "../components/TaskFinishListAdmin";
import { actChangeNoti } from "../actions";

class TaskPage extends Component {
  showElement = (isAdmin) => {
    if (isAdmin) {
      return <TaskFinishListAdmin changeNotify={this.props.changeNotify} />;
    }
    return <TaskFinishList />;
  };
  render() {
    let { user } = this.props;
    return (
      <div className="row">
        {/* Task doing */}
        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
          <TaskDoingList user={user} changeNotify={this.props.changeNotify} />
        </div>
        {/* task finish */}
        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
          {this.showElement(user.infor.isAdmin)}
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
let mapDispatchToProps = (dispatch) => {
  return {
    changeNotify: (style, title, content) => {
      dispatch(actChangeNoti(style, title, content));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(TaskPage);
