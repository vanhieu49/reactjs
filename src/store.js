import { createStore } from 'redux';
import appReducer from './reducers'



const store = createStore(
    appReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);


store.subscribe(() => {
    // console.log(store.getState())
})


export default store;