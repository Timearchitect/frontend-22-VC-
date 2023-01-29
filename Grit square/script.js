import { initializeApp } from "https://www.gstatic.com/firebasejs/9.16.0/firebase-app.js";
//import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.16.0/firebase-analytics.js";
import {
  getDatabase,
  ref,
  set,
  onValue,
  remove,
  push,
} from "https://www.gstatic.com/firebasejs/9.16.0/firebase-database.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  databaseURL:
    "https://onlinedatabase-2cd29-default-rtdb.europe-west1.firebasedatabase.app",
  apiKey: "AIzaSyBuwc5HIp8-VaojCoNH904rph-YQwv9ugc",
  authDomain: "onlinedatabase-2cd29.firebaseapp.com",
  projectId: "onlinedatabase-2cd29",
  storageBucket: "onlinedatabase-2cd29.appspot.com",
  messagingSenderId: "513260891542",
  appId: "1:513260891542:web:a3af24974e5dbd521381b7",
  measurementId: "G-1QXQ3M2ZE2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
const database = getDatabase();

// skriva
function writeUserData(message) {
  let adressRef = ref(database, "Eleonora/barn1");
  set(adressRef, {
    message: message,
    username: "EL",
    lista: [888, 2, 3, 4],
  });
}

writeUserData("SUPP DOG!!!");

// läsa en specifik onValue direkt + när den ändrar value
const urlRef = ref(database, "Eleonora/barn1");
onValue(urlRef, (snapshot) => {
  const data = snapshot.val();
  console.log(data.lista);
  document.body.innerHTML = data.lista[1];
});

const urlRootRef = ref(database, "/Eleonora");
//läsa childs i root.
console.warn("LOOP and children!!");
onValue(
  urlRootRef,
  (snapshot) => {
    snapshot.forEach((childSnapshot) => {
      const childKey = childSnapshot.key;
      const childData = childSnapshot.val();
      console.log(childKey);
      console.log(childData.message);
    });
  } /* ,
    {
        onlyOnce: true,  // engång
    } */
);

//radera stuff.
const deleteRef = ref(database, "/filip/username");
remove(deleteRef).then(() => {
  console.log("location removed");
});

// kolla om det supportas i olika webb läsare
if (typeof Storage !== "undefined") {
  // läsa från user pref
  console.log(localStorage.getItem("name"));
  console.log(localStorage.getItem("lastLoggin"));

  //skriva i user pref
  //localStorage.setItem("name", "Alrik");
  // localStorage.setItem("lastLoggin","today!!");
}
