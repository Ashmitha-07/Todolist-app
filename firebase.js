
import firebase from "firebase";
const firebaseApp = firebase.initializeApp({
    
        apiKey: "AIzaSyDQDLB0NJX19y3nEbdzxtUnqfEPHEOtlog",
        authDomain: "todo-app-5bc9a.firebaseapp.com",
        databaseURL: "https://todo-app-5bc9a.firebaseio.com",
        projectId: "todo-app-5bc9a",
        storageBucket: "todo-app-5bc9a.appspot.com",
        messagingSenderId: "41745526963",
        appId: "1:41745526963:web:2c237b5c659d1535df40c6",
        measurementId: "G-5JLWX2ERNR"
     
}); 
const db = firebaseApp.firestore();
export default db; 