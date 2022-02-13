// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: 'AIzaSyAyYTPY6lI0yPrP2Ify6_AjXCISjLDS01c',
    authDomain: 'authentication-a7b30.firebaseapp.com',
    projectId: 'authentication-a7b30',
    storageBucket: 'authentication-a7b30.appspot.com',
    messagingSenderId: '226207248166',
    appId: '1:226207248166:web:b0f749e3f1dbd09d9f9be7'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export const storage = getStorage(app);
export default auth;
