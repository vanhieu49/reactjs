import * as types from '../constants/ActionType'
import { v4 as uuidv4 } from 'uuid';

let defaultState = [
    {
        id:'aplusautomation',
        name:'aplusautomation',
        image:'aplusautomation.jpg',
        sumary:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. At dicta asperiores veniam repellat unde debitis quisquam magnam magni ut deleniti!',
        price:12,
        canBuy:true
    },
    {
        id:'aplusmedia',
        name:'aplus media',
        image:'aplus-media.jpg',
        sumary:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. At dicta asperiores veniam repellat unde debitis quisquam magnam magni ut deleniti!',
        price:5,
        canBuy:false
    },
    {
        id:'robofigcombo',
        name:'robo fig combo',
        image:'robo_fig_combo.jpg',
        sumary:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. At dicta asperiores veniam repellat unde debitis quisquam magnam magni ut deleniti!',
        price:22,
        canBuy:true
    },
    {
        id:'targetleapfrog',
        name:'target leap frog',
        image:'target-leap-frog.jpg',
        sumary:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. At dicta asperiores veniam repellat unde debitis quisquam magnam magni ut deleniti!',
        price:32,
        canBuy:true
    },

]

const products = (state = defaultState, action) => {
    switch (action.type) {
        case  types.LIST_PRODUCT:
            return state;
        default:
            return state
    }
}
export default products