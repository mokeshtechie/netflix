// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDUwzReWWxWISsoRrA06snxpVKhwpEI2DI",
  authDomain: "netflix-clone-518ff.firebaseapp.com",
  projectId: "netflix-clone-518ff",
  storageBucket: "netflix-clone-518ff.appspot.com",
  messagingSenderId: "66749845132",
  appId: "1:66749845132:web:703a93bff7b4f7cd6975a9"
};


export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app)