import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDm_x-NttrvvIrievJvCmF_attwznAqsl0",
  authDomain: "whatsapp-clone-902cf.firebaseapp.com",
  projectId: "whatsapp-clone-902cf",
  storageBucket: "whatsapp-clone-902cf.appspot.com",
  messagingSenderId: "490675799982",
  appId: "1:490675799982:web:d8d75afca4e9b655362a3f",
  measurementId: "G-Q2WE192K61"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const database = firebaseApp.firestore();
const authentication = firebaseApp.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { database, authentication, provider };
