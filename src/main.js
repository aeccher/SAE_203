import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './index.css'

// Import the functions you need from the SDKs you need

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.2/firebase-app.js";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

const firebaseConfig = {

    apiKey: "AIzaSyDMyrw6qICKdqZmM6hRKkpw-UNTLjJn4i4",

    authDomain: "sae-203-3c951.firebaseapp.com",

    projectId: "sae-203-3c951",

    storageBucket: "sae-203-3c951.appspot.com",

    messagingSenderId: "350606108976",

    appId: "1:350606108976:web:e45539aa64197e771380f5"

};


// Initialize Firebase

const appFirebase = initializeApp(firebaseConfig);


const app = createApp(App)

app.use(router)

app.mount('#app')
