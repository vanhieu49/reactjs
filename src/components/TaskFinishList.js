import React, { Component } from "react";
import TaskFinishItem from "./TaskFinishItem";
import { taskCompleteRef } from "../firebase";

class TaskFinishList extends Component {
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
        return <TaskFinishItem key={index} item={item} index={index} />;
      });
      return <ul className="list-group">{xhtml}</ul>;
    } else {
      return <h3>Loading ....</h3>;
    }
  };
  render() {
    let { items } = this.state;
    return (
      <div className="panel panel-success">
        <div className="panel-heading">
          <h3 className="panel-title">Task Finish</h3>
        </div>
        <div className="panel-body">{this.showElementItem(items)}</div>
      </div>
    );
  }
}

export default TaskFinishList;
