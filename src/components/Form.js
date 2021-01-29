import React, { Component } from 'react';
import { connect } from 'react-redux'
import { actCloseForm, actAddItem, } from '../actions'


class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            task_id: '',
            task_name: '',
            task_level: 0
        }
    }
    handleCancel = () => {
        this.props.handleCancel();
    }
    handleChange = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }
    handleSubmit = (event) => {
        let item = {
            id: this.state.task_id,
            name: this.state.task_name,
            level: this.state.task_level
        }
        this.props.handleAddItem(item)
        event.preventDefault();
    }
    componentDidMount = () => {
        this.updateItem(this.props.itemSelected)
    }
    componentWillReceiveProps(nextProps) {
        this.updateItem(nextProps.itemSelected)
    }
    updateItem = (item) => {
        if (item) {
            this.setState({
                task_id: item.id,
                task_name: item.name,
                task_level: item.level
            })
        }
    }
    render() {
        let { isShowForm } = this.props;
        if (!isShowForm) return null;
        return (
            <div className="row">
                <div className="col-md-offset-7 col-md-5">
                    <form onSubmit={this.handleSubmit} className="form-inline">
                        <div className="form-group">
                            <label className="sr-only" htmlFor='task_name'>label</label>
                            <input
                                name="task_name"
                                value={this.state.task_name} onChange={this.handleChange}
                                type="text" className="form-control" placeholder="Task Name" />
                        </div>
                        <div className="form-group">
                            <label className="sr-only" htmlFor='task_level'>label</label>
                            <select
                                name="task_level"
                                value={this.state.task_level} onChange={this.handleChange}
                                className="form-control" required="required" >
                                <option value={0}>Small</option>
                                <option value={1}>Medium</option>
                                <option value={2}>High</option>
                            </select>
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                        <button
                            onClick={this.handleCancel}
                            type="button" className="btn btn-secondary">Cancel</button>
                    </form>
                </div>
            </div>
        );
    }
}

let mapStateToProps = state => {
    return {
        isShowForm: state.isShowForm,
        itemSelected: state.selectedItem
    }
}
let mapDispatchToProps = (dispatch, ownProp) => {
    return {
        handleCancel: () => {
            dispatch(actCloseForm())
        },
        handleAddItem: (item) => {
            dispatch(actAddItem(item));
            dispatch(actCloseForm())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Form);
