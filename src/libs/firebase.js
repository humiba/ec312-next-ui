import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBmp0Wpl7bNAPMjqbhfIhJhrY_2bb2RrNg",
  authDomain: "ec312-project.firebaseapp.com",
  projectId: "ec312-project",
  storageBucket: "ec312-project.appspot.com",
  messagingSenderId: "686154810804",
  appId: "1:686154810804:web:d0868e796ff43f28eadee1",
  measurementId: "G-1TC9L2W338",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const googleProvider = new GoogleProvider();

export { analytics, auth, googleProvider };
