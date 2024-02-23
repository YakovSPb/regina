// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

const firebaseConfig = {

    apiKey: process.env.FIREBASE,

    authDomain: "shop-650b4.firebaseapp.com",

    projectId: "shop-650b4",

    storageBucket: "shop-650b4.appspot.com",

    messagingSenderId: "72463942336",

    appId: "1:72463942336:web:b0a760455713c95d7ee325"

};


// Initialize Firebase

export const app = initializeApp(firebaseConfig);