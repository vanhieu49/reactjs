import { combineReducers } from 'redux'
import query from './query'
import breadcrumd from './breadcrumd'


const appReducer = combineReducers({
    query,
    breadcrumd
})

export default appReducer;