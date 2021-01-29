import React, { Component } from 'react';
import { connect } from 'react-redux'
import { actOpenForm, actDelete,actSelected } from '../actions'

class Item extends Component {

    handleEdit = (item) => {
        this.props.handleEdit(item)
    }
    handleDelete(id) {
        this.props.handleDelete(id)
    }
    showElementLevel(level) {
        let elementLevel = <span className="label label-default">Small</span>;
        if (level === 1) {
            elementLevel = <span className="label label-info">Medium</span>;
        } else if (level === 2) {
            elementLevel = <span className="label label-danger">High</span>;
        }
        return elementLevel;
    }
    render() {
        const { item, index } = this.props;
        return (
            <tr>
                <td className="text-center">{index + 1}</td>
                <td>{item.name}</td>
                <td className="text-center">
                    {this.showElementLevel(item.level)}
                </td>
                <td>
                    <button
                        onClick={() => this.handleEdit(item)}
                        type="button" className="btn btn-warning">Edit</button>
                    <button
                        onClick={() => this.handleDelete(item.id)}
                        type="button" className="btn btn-danger">Delete</button>
                </td>
            </tr>
        );
    }

}
const mapStateToProps = state => {
    return {
        // isShowForm: state.isShowForm
    }
}
let mapDispatchToProps = (dispatch, ownProp) => {
    return {
        handleEdit: (item) => {
            dispatch(actOpenForm())
            dispatch(actSelected(item))
        },
        handleDelete: (id) => {
            dispatch(actDelete(id))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Item);
