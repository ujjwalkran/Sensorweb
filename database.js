import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD77O_xaQmg3tV9kKHfne1Zs4pGLfsULas",
  authDomain: "sensorprojects-6db23.firebaseapp.com",
  databaseURL: "https://sensorprojects-6db23-default-rtdb.firebaseio.com",
  projectId: "sensorprojects-6db23",
  storageBucket: "sensorprojects-6db23.appspot.com",
  messagingSenderId: "407244447376",
  appId: "1:407244447376:web:8067aa0ecce952a4a98215",
  measurementId: "G-38DTS587G4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

var sensorprojectsDB = firebase.database().ref("sensorprojects");

database.ref('x').on('value', (snapshot) => {
    var xData = snapshot.val();
    console.log(data);
  });
  