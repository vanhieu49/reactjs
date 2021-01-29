import React, { Component } from "react";
import CompTaskDoingItem from "./TaskDoingItem";
import FormAdd from "./FormAdd";
import { tasksRef } from "../firebase";

class TaskList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
    };
  }

  componentDidMount() {
    tasksRef.on("value", (items) => {
      let data = [];
      items.forEach((item) => {
        const { name, email } = item.val();
        data.push({ name, email, key: item.key });
      });

      this.setState({
        items: data,
      });
    });
  }
  showItems = (items) => {
    let xhtml = null;
    if (items.length > 0) {
      xhtml = items.map((item, index) => {
        return (
          <CompTaskDoingItem
            key={index}
            item={item}
            index={index}
            changeNotify={this.props.changeNotify}
          />
        );
      });
    }
    return <ul className="list-group">{xhtml}</ul>;
  };
  render() {
    let { items } = this.state;
    let { user } = this.props;
    return (
      <div className="panel panel-info">
        <div className="panel-heading">
          <h3 className="panel-title">Task Doing</h3>
        </div>
        <div className="panel-body">{this.showItems(items)}</div>
        <div className="panel-footer text-right">
          <FormAdd user={user} changeNotify={this.props.changeNotify} />
        </div>
      </div>
    );
  }
}

export default TaskList;
