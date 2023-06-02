import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here
const firebaseConfig = {
    apiKey: "AIzaSyBHw0eWVIkkrRu-7xCP-kkEMTx8aBcx4UU",
    authDomain: "pro-71-8dd70.firebaseapp.com",
    projectId: "pro-71-8dd70",
    storageBucket: "pro-71-8dd70.appspot.com",
    messagingSenderId: "410937920987",
    appId: "1:410937920987:web:17369ec35b840281b7abfe"
  };
  
//
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
export default firebase.firestore();
