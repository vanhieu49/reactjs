import * as types from '../constants/ActionTypes'

export const actCloseForm = () =>{
    return {
        type:types.CLOSE_FORM
    }
}
export const actOpenForm = () =>{
    return {
        type:types.OPEN_FORM
    }
}
export const actToggleForm = () =>{
    return {
        type:types.TOGGLE_FORM
    }
}
export const actSort = (orderBy,orderDir) =>{
    return {
        type:types.SORT_ITEM,
        orderBy,
        orderDir
    }
}
export const actSearch = (strSearch) =>{
    return {
        type:types.CHANGE_SEARCH,
        strSearch
    }
}
export const actAddItem = (item) =>{
    return {
        type:types.ADD_ITEM,
        item
    }
}
export const actDelete = (id) =>{
    return {
        type:types.DELETE_ITEM,
        id
    }
}
export const actSelected = (item) =>{
    return {
        type:types.SELECTED_ITEM,
        item
    }
}
export const actUnSelected = () =>{
    return {
        type:types.UN_SELECTED_ITEM,    
    }
}