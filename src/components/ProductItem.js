import React, { Component } from 'react'
import {connect} from 'react-redux'
import {actChangeNoti,actProductBuy} from '../actions'
import { formatPrice,checkNumber } from '../helper'
import * as config from '../constants/config'

class ProductItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 1
        }
    }
    handleAddCart = (product) => {
        let quantity = +this.state.value;
        if (!checkNumber(quantity)) {
            this.props.ChangeNoti(config.NOTI_GREATER_THAN_ONE)
        }else{
            this.props.BuyProduct(product,quantity)
            this.props.ChangeNoti(config.NOTI_ACT_ADD)
        }
        this.setState({
            value:1
        })
        
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
        let { product } = this.props;
        return (
            <div className="media product">
                <div className="media-left">
                    <a href="http://localhost:3000/">
                        <img className="media-object" src={`images/${product.image}`} alt="charmander" />
                    </a>
                </div>
                <div className="media-body">
                    <h4 className="media-heading">{product.name}</h4>
                    <p>{product.sumary}</p>
                    {this.showAreaBuy(product)}

                </div>
            </div>
        )
    }
    showAreaBuy = (product) => {
        let xhmtl = null;
        let price = formatPrice(product.price, 'USD', 'right')
        if (product.canBuy) {
            xhmtl = <p>
                <input name="value" value={this.state.value} onChange={this.handleChange} type="number" min={1} />
                <a  onClick={() => this.handleAddCart(product)} type="button" className="price"> {price} </a>
            </p>
        } else {
            xhmtl = <span className="price"> {price}</span>
        }
        return xhmtl
    }
}
let mapStateToProps = state=>{
    return{

    }
}
let mapDispatchToProps=(dispatch,ownProps)=>{
    return {
        BuyProduct:(product,quantity)=>{
            dispatch(actProductBuy(product,quantity))
        },
        ChangeNoti:(noti)=>{
            dispatch(actChangeNoti(noti))
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(ProductItem);