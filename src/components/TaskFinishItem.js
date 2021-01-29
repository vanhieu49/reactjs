import React, { Component } from "react";

class TaskFinishItem extends Component {
  render() {
    let { item } = this.props;
    return (
      <li className="list-group-item">
        <p className="task">{item.name}</p>
        <span className="author">
          <span className="glyphicon glyphicon-user" aria-hidden="true" />
          &nbsp;{item.email}
        </span>
      </li>
    );
  }
}

export default TaskFinishItem;
