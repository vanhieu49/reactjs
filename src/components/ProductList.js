import React, { Component } from 'react'
import { connect } from 'react-redux'

import * as config from '../constants/config'
import ProductItem from './ProductItem'

class ProductList extends Component {
    render() {
        let { products } = this.props;
        return (
            <div className="panel panel-primary">
                <div className="panel-heading"><h1 className="panel-title">List Products</h1></div>
                <div className="panel-body" id="list-product">
                    {/* PRODUCT : START */}
                    {this.showElementProducts(products)}

                </div>
            </div>
        )
    }
    showElementProducts = (products) => {
        let xhmtl = <b>{config.NOTI_EMPTY_PRODUCT}</b>
        if (products.length) {
            xhmtl = products.map((product, index) => {
                return (
                    <ProductItem key={index} product={product} index={index} />
                )
            })
        }
        return xhmtl;
    }
}

const mapStateToProps = (state) => {
    return {
        products: state.products
    }
}

export default connect(mapStateToProps, null)(ProductList);