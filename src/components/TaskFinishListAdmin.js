import React, { Component } from "react";
import TaskFinishItemAdmin from "./TaskFinishItemAdmin";
import { taskCompleteRef } from "../firebase";
import * as notify from "../constants/Notify";

class TaskFinishListAdmin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
    };
  }
  componentDidMount() {
    taskCompleteRef.on("value", (items) => {
      let data = [];
      items.forEach((item) => {
        let { name, email } = item.val();
        data.push({ name, email, key: item.key });
      });
      this.setState({
        items: data,
      });
    });
  }
  showElementItem = (items) => {
    let xhtml = null;
    if (items.length > 0) {
      xhtml = items.map((item, index) => {
        return (
          <TaskFinishItemAdmin
            key={index}
            item={item}
            index={index}
            changeNotify={this.props.changeNotify}
          />
        );
      });
      return <ul className="list-group">{xhtml}</ul>;
    } else {
      return <h3>Loading ....</h3>;
    }
  };

  handleClearAll = () => {
    taskCompleteRef.set([]);
    this.props.changeNotify(
      notify.NOTI_TYPE_WARNING,
      notify.NOTI_CLEARALL_TASK_TITLE,
      notify.NOTI_CLEARALL_TASK_MESSAGE
    );
  };
  render() {
    let { items } = this.state;
    return (
      <div className="panel panel-success">
        <div className="panel-heading">
          <h3 className="panel-title">Task Finish</h3>
        </div>
        <div className="panel-body">{this.showElementItem(items)}</div>
        <div className="panel-footer text-right">
          <button
            onClick={this.handleClearAll}
            type="button"
            className="btn btn-danger btn-xs"
          >
            Clear All
          </button>
        </div>
      </div>
    );
  }
}


export default TaskFinishListAdmin;
