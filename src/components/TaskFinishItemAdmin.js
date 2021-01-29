import React, { Component } from "react";

import * as notify from "../constants/Notify";
import { taskCompleteRef } from "../firebase";

class TaskFinishItemAdmin extends Component {
  handleDelete = (key) => {
    taskCompleteRef.child(key).remove();
    this.props.changeNotify(
      notify.NOTI_TYPE_DANGER,
      notify.NOTI_REMOVE_TASK_TITLE,
      notify.NOTI_REMOVE_TASK_MESSAGE
    );
  };
  render() {
    let { item } = this.props;
    return (
      <li className="list-group-item">
        <p className="task">{item.name}</p>
        <span className="author">
          <span className="glyphicon glyphicon-user" aria-hidden="true" />
          &nbsp;{item.email}
        </span>
        <button
          onClick={() => this.handleDelete(item.key)}
          type="button"
          className="btn btn-danger btn-xs"
        >
          Delete
        </button>
      </li>
    );
  }
}

export default TaskFinishItemAdmin;
