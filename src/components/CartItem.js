import React, { Component } from 'react'
import { connect } from 'react-redux'
import { actDeleteProduct, actChangeNoti, actUpdateProduct } from '../actions'
import { formatPrice, checkNumber } from '../helper'
import * as config from '../constants/config'


class CartItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 0
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
    handleDelete = (product) => {
        this.props.deleteProduct(product)
        this.props.changeNoti(config.NOTI_ACT_DELETE)
    }
    handleUpdate = (product, quantity) => {
        if (!checkNumber(quantity)) {
            this.props.changeNoti(config.NOTI_GREATER_THAN_ONE)
        } else {
            this.props.updateProduct(product, +quantity)
            this.props.changeNoti(config.NOTI_ACT_UPDATE)
        }
    }
    render() {
        let { cart, index } = this.props;
        let { product } = cart;
        let quantity = this.state.value > 0 ? this.state.value : cart.quantity
        return (
            <tr>
                <th scope="row">{index + 1}</th>
                <td>{product.name}</td>
                <td>{formatPrice(product.price, '$', 'right')}</td>
                <td><input name="value" value={quantity} onChange={this.handleChange} type="number" min={1} /></td>
                <td><strong>{this.showPrice(product.price, quantity)}</strong></td>
                <td>
                    <a onClick={() => this.handleUpdate(product, quantity)} className="label label-info update-cart-item" href="#" data-product>Update</a>
                    <a onClick={() => this.handleDelete(product)} className="label label-danger delete-cart-item" href="#" data-product>Delete</a>
                </td>
            </tr>
        )
    }
    showPrice = (price, quantity) => {
        let result = null;
        result = formatPrice(price * quantity, '$', 'right');
        return result;
    }
}
let mapDispatchToProps = (dispatch, ownProps) => {
    return {
        updateProduct: (product, quantity) => {
            dispatch(actUpdateProduct(product, quantity))
        },
        deleteProduct: (product) => {
            dispatch(actDeleteProduct(product))
        },
        changeNoti: (value) => {
            dispatch(actChangeNoti(value))
        }
    }
}
export default connect(null, mapDispatchToProps)(CartItem);