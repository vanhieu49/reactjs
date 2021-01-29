import React, { Component } from 'react'
import { connect } from 'react-redux'
import {sumBy, times} from 'lodash'

import CartItem from './CartItem'
import Notify from './Notify'
import * as config from '../constants/config'
import {formatPrice} from '../helper'

class CartList extends Component {
    render() {
        let { items } = this.props;
        return (
            <div>
                <div className="panel panel-danger">
                    <div className="panel-heading"><h1 className="panel-title">Your Cart</h1></div>
                    <div className="panel-body">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th width="4%">#</th>
                                    <th>Pokemon</th>
                                    <th width="15%">Price</th>
                                    <th width="4%">Quantity</th>
                                    <th width="20%">Subtotal</th>
                                    <th width="25%">Action</th>
                                </tr>
                            </thead>
                            {this.showBodyCart(items)}
                            {this.showFootercart(items)}
                        </table>
                    </div>
                </div>
                <Notify />
            </div>
        )
    }
    showBodyCart = (items) => {
        let xhtml = null;
        if (items.length) {
            xhtml = items.map((item, index) => {
                return (
                    <CartItem key={index + '-' + item.quantity} cart={item} index={index} />
                )
            })
        }
        return <tbody id="my-cart-body">
            {xhtml}
        </tbody>
    }
    showFootercart = (items) => {
        let xhtml = <tr><th colSpan={6}>{config.NOTI_EMPTY_PRODUCT}</th></tr>
        if (items.length) {
            let totalQuantity = sumBy(items,'quantity')
            let totalPrice = sumBy(items,(item)=>{
                return item.product.price * item.quantity
            })
            xhtml = <tr>
                    <td colSpan={4}>There are <b>{totalQuantity}</b> items in your shopping cart.</td>
                    <td colSpan={2} className="total-price text-left">{formatPrice(totalPrice,'$','right')}</td>
                </tr>
        }
        return <tfoot id="my-cart-footer">
                 {xhtml}
                </tfoot>
    }
}
const mapStateToProps = state => {
    return {
        items: state.carts
    }
}
export default connect(mapStateToProps, null)(CartList);