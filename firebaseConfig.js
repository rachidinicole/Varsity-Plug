// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, initializeAuth, getReactNativePersistence } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA9gwcnEBOfHIuP0f7BBUGtKNzeBC9BZ5s",
  authDomain: "varsity-plug.firebaseapp.com",
  projectId: "varsity-plug",
  storageBucket: "varsity-plug.appspot.com",
  messagingSenderId: "769621566219",
  appId: "1:769621566219:web:a515b76bcd7fc847fe380e",
  measurementId: "G-GJBG77FTYG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});
export const fireAuth = getAuth(app);

