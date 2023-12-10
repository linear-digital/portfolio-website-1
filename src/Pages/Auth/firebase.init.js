// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyADvtx2i8zY0sOjbjqnjRE7CkZkRvZ2urs",
    authDomain: "app-edit-51971.firebaseapp.com",
    projectId: "app-edit-51971",
    storageBucket: "app-edit-51971.appspot.com",
    messagingSenderId: "895167872190",
    appId: "1:895167872190:web:3448ce959a34d2387232ef",
    measurementId: "G-8BZM112B0R"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const analytics = getAnalytics(app);

