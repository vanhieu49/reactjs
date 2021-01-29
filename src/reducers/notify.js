import * as types from '../constants/ActionType'
import * as config from '../constants/config'

let defaultState = config.NOTI_READY_TO_BUY;


const notify = (state = defaultState, action) => {
    switch (action.type) {
        case  types.CHANGE_NOTIFY:
            return action.content;
        default:
            return state
    }
}
export default notify