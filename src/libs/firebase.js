// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBmp0Wpl7bNAPMjqbhfIhJhrY_2bb2RrNg",
  authDomain: "ec312-project.firebaseapp.com",
  projectId: "ec312-project",
  storageBucket: "ec312-project.appspot.com",
  messagingSenderId: "686154810804",
  appId: "1:686154810804:web:d0868e796ff43f28eadee1",
  measurementId: "G-1TC9L2W338",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { analytics };
