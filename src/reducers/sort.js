import * as types from '../constants/ActionTypes'
let defaultState = {
    orderBy: 'level',
    orderDir: 'asc',
}

const sort = (state = defaultState, action) => {
    let {orderBy,orderDir} = action;
    switch (action.type) {
        case types.SORT_ITEM:
            return {orderBy,orderDir};
        default:
            return state;
    }
}

export default sort;