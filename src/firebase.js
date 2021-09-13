// import firebase from  "firebase/app"
// import "firebase/auth"


//  export const auth= firebase.initializeApp( {
//     apiKey: "AIzaSyD4uW8HYpAjY7LjB4WvS0_a2Agn7mC0-pA",
//     authDomain: "chat-app-9a74b.firebaseapp.com",
//     databaseURL: "https://chat-app-9a74b-default-rtdb.firebaseio.com",
//     projectId: "chat-app-9a74b",
//     storageBucket: "chat-app-9a74b.appspot.com",
//     messagingSenderId: "556602971591",
//     appId: "1:556602971591:web:fd0bec10f98d4d186a35e2",
//     measurementId: "G-MMQNLT2RLY"
//   }).auth();

import firebase from "firebase"

var firebaseConfig = {
    apiKey: "AIzaSyD4uW8HYpAjY7LjB4WvS0_a2Agn7mC0-pA",
    authDomain: "chat-app-9a74b.firebaseapp.com",
    databaseURL: "https://chat-app-9a74b-default-rtdb.firebaseio.com",
    projectId: "chat-app-9a74b",
    storageBucket: "chat-app-9a74b.appspot.com",
    messagingSenderId: "556602971591",
    appId: "1:556602971591:web:fd0bec10f98d4d186a35e2",
    measurementId: "G-MMQNLT2RLY"
};

const firebaseApp=firebase.initializeApp(firebaseConfig);
export const db=firebase.firestore();

 export  let auth = firebase.auth();

//there is many explicite export 

//but only one default export
// export default db;

