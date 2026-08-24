// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCSbAZdMWmkYlVIUgrm81hDTBtoyA8WROE",
    authDomain: "shuggy-eadd0.firebaseapp.com",
    projectId: "shuggy-eadd0",
    storageBucket: "shuggy-eadd0.firebasestorage.app",
    messagingSenderId: "385681056755",
    appId: "1:385681056755:web:003d3e61a872247dfde886",
    measurementId: "G-H34PMK9EXR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);