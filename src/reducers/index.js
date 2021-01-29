import { combineReducers } from "redux";
import notify from "./notify";
import user from "./user";

const appReducer = combineReducers({
  notify,
  user,
});

export default appReducer;
