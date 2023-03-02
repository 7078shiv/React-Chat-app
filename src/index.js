import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from "firebase/app";




// Your web app's Firebase configuration

const firebaseConfig = {

    apiKey: "AIzaSyCuZHraojUZyMpbnp2dBplizIrUiYaZTA0",

    authDomain: "react-chat-app-f97d3.firebaseapp.com",

    databaseURL: "https://react-chat-app-f97d3-default-rtdb.firebaseio.com",

    projectId: "react-chat-app-f97d3",

    storageBucket: "react-chat-app-f97d3.appspot.com",

    messagingSenderId: "1018060313048",

    appId: "1:1018060313048:web:640ef0ae6b424ff7bba2ad"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
