import { combineReducers } from 'redux'
import isShowForm from './isShowForm'
import sort from './sort'
import items from './items'
import search from './search'
import selectedItem from './selectedItem'

const appReducer = combineReducers({
    isShowForm,
    sort,
    items,
    search,
    selectedItem
})

export default appReducer;