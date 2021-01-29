import * as types from '../constants/ActionTypes'
let defaultState = ''

const search = (state = defaultState, action) => {
    let {strSearch } = action;
    switch (action.type) {
        case types.CHANGE_SEARCH:
            return strSearch;
        default:
            return state;

    }
}

export default search;