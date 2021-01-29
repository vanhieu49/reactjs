import * as types from '../constans/ActionType'

let defaultState = ''

const query = (state = defaultState, action) => {
    switch (action.type) {
        case types.CHANGE_QUERY:
           state = action.query;
           return state;
        default:
            return state;
    }
}

export default query;