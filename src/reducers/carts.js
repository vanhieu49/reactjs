import * as types from '../constants/ActionType'
import * as config from '../constants/config'
import { remove } from 'lodash'

let defaultState = [];
let cartItems = JSON.parse(localStorage.getItem(config.CARTS_FROM_LOCAL_STORAGE));
defaultState = (cartItems !== null && cartItems.length > 0) ? cartItems : defaultState;

let getPosition = (cart, product) => {
    let position = -1;
    cart.forEach((element, index) => {
        if (element.product.id === product.id) {
            position = index
        }
    });
    return position;
}

const carts = (state = defaultState, action) => {
    let { product, quantity } = action;
    let position = -1;
    switch (action.type) {
        case types.BUY_PRODUCT:
        position = getPosition(state, product)
            if (position > -1) {
                state[position].quantity += quantity
            } else {
                state.push({ product, quantity })
            }
            localStorage.setItem(config.CARTS_FROM_LOCAL_STORAGE, JSON.stringify(state))
            return [...state];
        case types.UPDATE_PRODUCT:
             position = getPosition(state, product)
            console.log(position)
            if (position > -1) {
                state[position].quantity = quantity
            }
            localStorage.setItem(config.CARTS_FROM_LOCAL_STORAGE, JSON.stringify(state))
            return [...state];
        case types.REMOVE_PRODUCT:
            remove(state, (item) => {
                return item.product.id === product.id
            })
            localStorage.setItem(config.CARTS_FROM_LOCAL_STORAGE, JSON.stringify(state))
            return [...state];
        default:
            return state
    }
}
export default carts