// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD9mdN3Bx8XmRXNIeNE5PyKqmi1Yy4hiYY",
  authDomain: "assignment-10-clint-site.firebaseapp.com",
  projectId: "assignment-10-clint-site",
  storageBucket: "assignment-10-clint-site.appspot.com",
  messagingSenderId: "549840298324",
  appId: "1:549840298324:web:b647aafb9f10737d87a8c1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app