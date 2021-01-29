import React, { Component } from "react";
import { tasksRef } from "../firebase";
import * as notify from "../constants/Notify";

class FormAdd extends Component {
  constructor(props) {
    super(props);
    this.state = {
      task: "",
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
  handleSubmit = (e) => {
    let { user } = this.props;
    let { task } = this.state;
    console.log(user.infor.email);
    tasksRef.push({
      name: task,
      email: user.infor.email,
    });
    this.setState({
      task: "",
    });
    this.props.changeNotify(
      notify.NOTI_TYPE_SUCCESS,
      notify.NOTI_ADD_TASK_TITLE,
      notify.NOTI_ADD_TASK_MESSAGE
    );
    e.preventDefault();
  };
  render() {
    return (
      <form className="form-inline" onSubmit={this.handleSubmit}>
        <div className="form-group">
          <input
            value={this.state.task}
            onChange={this.handleChange}
            type="text"
            name="task"
            className="form-control"
            placeholder="Task"
          />
        </div>
        <button type="submit" className="btn btn-info">
          Add
        </button>
      </form>
    );
  }
}

export default FormAdd;
