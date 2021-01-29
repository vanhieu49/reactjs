import * as types from "../constants/ActionType";

let defaultState = {
  isLogin: false,
  infor: {
    email: "",
    uid: "",
  },
};

const notify = (state = defaultState, action) => {
  switch (action.type) {
    case types.USER_LOGIN:
      state.isLogin = true;
      state.infor = action.infor;
      return { ...state };
    case types.USER_LOGOUT:
      state.isLogin = false;
      state.infor = {
        email: "",
        uid: "",
      };
      return { ...state };
    default:
      return state;
  }
};

export default notify;
