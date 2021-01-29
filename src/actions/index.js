import * as types from "../constants/ActionType";

export const actChangeNoti = (style, title, content) => {
  return {
    type: types.CHANGE_NOTIFY,
    style,
    title,
    content,
  };
};

export const actHidenNoti = ()=>{
    return{
        type:types.HIDE_NOTIFY
    }
}

export const actLogin = (infor)=>{
  return{
    type:types.USER_LOGIN,
    infor
  }
}

export const actLogOut = ()=>{
  return{
    type:types.USER_LOGOUT,
  }
}