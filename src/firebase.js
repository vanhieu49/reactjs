// Firebase App (the core Firebase SDK) is always required and must be listed first
import firebase from "firebase/app";

import "firebase/database";
import "firebase/auth";

var firebaseConfig = {
  apiKey: "AIzaSyB4c4b5LzDEdUmJM1DemNWmIBoxFyRbxSg",
  authDomain: "task-manager-reactjs-1eb24.firebaseapp.com",
  databaseURL: "https://task-manager-reactjs-1eb24-default-rtdb.firebaseio.com",
  projectId: "task-manager-reactjs-1eb24",
  storageBucket: "task-manager-reactjs-1eb24.appspot.com",
  messagingSenderId: "414024970661",
  appId: "1:414024970661:web:28e74f063e576e6939b84c",
};
// Initialize Firebase
export const firebaseApp = firebase.initializeApp(firebaseConfig);

export const tasksRef = firebase.database().ref("tasks");
export const taskCompleteRef = firebase.database().ref("tasksComplete");
export const userRef = firebase.database().ref("users");