import React from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import ReactDOM from "react-dom";
import App from "./components/App";
import reportWebVitals from "./reportWebVitals";
import appReducer from "./reducers";
import { firebaseApp, userRef } from "./firebase";
import { actLogin, actLogOut } from "./actions";

const store = createStore(
  appReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

firebaseApp.auth().onAuthStateChanged((user) => {
  if (user) {
    let userInfor = {
      email: user.email,
      uid: user.uid,
      website: "",
      isAdmin: "",
    };
    userRef
      .child(user.uid)
      .once("value")
      .then((data) => {
        let infor = data.val();
        userInfor.website = infor.website;
        userInfor.isAdmin = infor.isAdmin;
        store.dispatch(actLogin(userInfor));
      });
  } else {
    store.dispatch(actLogOut());
    // User is signed out
    // ...
  }
});

// console.log(store.getState());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
