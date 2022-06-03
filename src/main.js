import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './index.css'

// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.7.0/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDO-t906O403XHjkKaREROgjmL5UmsqzfM",
    authDomain: "sae203-4ef0b.firebaseapp.com",
    projectId: "sae203-4ef0b",
    storageBucket: "sae203-4ef0b.appspot.com",
    messagingSenderId: "1023572995698",
    appId: "1:1023572995698:web:6a19084710a96efa2f5ceb"
};

// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig);

const app = createApp(App)

app.use(router)

app.mount('#app')
