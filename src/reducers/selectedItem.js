import * as types from '../constants/ActionTypes'
let defaultState = {}

const selectedItem = (state = defaultState, action) => {
    switch (action.type) {
        case types.SELECTED_ITEM:
            return action.item;
        case types.UN_SELECTED_ITEM:
            return {id:'',name:'',level:0};
        default:
            return state;

    }
}

export default selectedItem;