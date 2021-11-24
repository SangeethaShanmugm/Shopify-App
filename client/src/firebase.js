// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAuth, GoogleAuthProvider } from "firebase/auth";
import firebase from "firebase/app";
import "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const config = {
  apiKey: "AIzaSyBq-BY9rFGlFtZLDciSkoFXEqyTfGhKXuY",
  authDomain: "ecommerce-6a8e5.firebaseapp.com",
  projectId: "ecommerce-6a8e5",
  storageBucket: "ecommerce-6a8e5.appspot.com",
  messagingSenderId: "373087234359",
  appId: "1:373087234359:web:6caeb2ff511cc00b4e52b2"
};

// initialize firebase app
if (!firebase.apps.length) {
  firebase.initializeApp(config);
}
// export
// export default firebase;
export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
 