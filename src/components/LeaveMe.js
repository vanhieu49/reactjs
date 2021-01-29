import React, { Component } from 'react'
import { Prompt } from 'react-router-dom'

class LeaveMe extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isCheckbox: false
    }
  }
  handleChange = (event) => {
    let target = event.target;
    let value = target.type === 'checkbox' ? target.checked : target.value;
    let name = target.name;
    this.setState({
      [name]: value
    })
  }

  render() {

    return (
      <form onSubmit={this.handleSubmit}>
        <Prompt
          when={this.state.isCheckbox}
          message={location =>
            `Are you sure you want to go to ${location.pathname}`
          }
        />
        <legend>Form title</legend>
        <div className="form-group">
          <label>
            <input type="checkbox" checked={this.state.isCheckbox} onChange={this.handleChange} name="isCheckbox" />
              Leave me ?
          </label>
        </div>
      </form>
    );
  }
}

export default LeaveMe;
