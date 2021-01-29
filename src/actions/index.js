import * as types from '../constants/ActionType'

export const actChangeNoti = (content) =>{
    return {
        type:types.CHANGE_NOTIFY,
        content
    }
}


export const actProductBuy = (product,quantity) =>{
    return {
        type:types.BUY_PRODUCT,
        product,
        quantity
    }
}

export const actUpdateProduct = (product,quantity) =>{
    return {
        type:types.UPDATE_PRODUCT,
        product,
        quantity
    }
}

export const actDeleteProduct = (product) =>{
    return {
        type:types.REMOVE_PRODUCT,
        product
    }
}