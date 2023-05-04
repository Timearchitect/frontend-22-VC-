import { initializeApp } from "https://www.gstatic.com/firebasejs/9.16.0/firebase-app.js";
import {
    getDatabase,
    ref,
    set,
    onValue,
    remove,
    push,
    onChildAdded,
    onChildRemoved
} from "https://www.gstatic.com/firebasejs/9.16.0/firebase-database.js"; // <---

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
    databaseURL:
        "https://demo1-3c759-default-rtdb.europe-west1.firebasedatabase.app/", // <----
    apiKey: "AIzaSyDkRmoWLJ0eEXZKYEeUNwRF8V6X0oHwBi0",
    authDomain: "demo1-3c759.firebaseapp.com",
    projectId: "demo1-3c759",
    storageBucket: "demo1-3c759.appspot.com",
    messagingSenderId: "632318648569",
    appId: "1:632318648569:web:60f9813437fa829e598228",
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
const db = getDatabase(app); // <-----

console.log(db);

//document.getElementById("btn").addEventListener(
document.getElementById("content").addEventListener("click", (event) => {
    var promptMessage = prompt("Write you message:", "message");
    if (promptMessage == null) return;

    var e = event;
    console.log(e);
    var x = Math.round(event.clientX / window.innerWidth * 100);
    var y = Math.round(event.clientY / window.innerHeight * 100);

    console.log(window.innerWidth, window.innerHeight);
    console.log(x, y);
    //let inputName = document.getElementById("inName").value;
    //console.log(inputName);
    /*
    set(ref(db, inputName), {
        dateOfCretion: new Date().toString("yyyy-MM-dd hh:mm:ss"),
        message: promptMessage,
        x: x,
        y: y,
    });*/
    push(ref(db, "/"), {
      username: "Alrik",
      dateOfCretion: new Date().toString("yyyy-MM-dd hh:mm:ss"),
      message: promptMessage,
      x: x,
      y: y,
    })

});

function writeUserData() {
    let inputName = document.getElementById("inName").value;
    console.log(inputName);
    set(ref(db, inputName), {
        message: "hello",
        dateOfCretion: new Date(),
    });
}
//writeUserData()

onValue(
    ref(db, "Alrik"),
    (snapshot) => {
        const data = snapshot.val();
        //alert(data.message)
        //document.body.innerHTML= data.message;
    },
    { onlyOnce: true }
);

/* onValue(
    ref(db, "/"),
    (snapshot) => {
        // root kolla alla namn i root
        snapshot.forEach((childSnapshot) => {
            const childKey = childSnapshot.key;
            const childData = childSnapshot.val();
            // document.getElementById("content").innerHTML += "<p>"+childKey+"  "+childData.message+"</p>" + "<br>"

           console.log(childData.message.length);
           if(childData.message.length< 5)
           document.getElementById(
            "content"
          ).insertAdjacentHTML('beforeend', `<p class="bubble" id="${childKey}" style="left:${childData.x}vw; top:${childData.y}vh">${childData.message}</p>`);
          else
            document.getElementById(
              "content"
            ).insertAdjacentHTML('beforeend', `<p class="bubble speech" id="${childKey}" style="left:${childData.x}vw; top:${childData.y}vh">${childData.message}</p>`);

            console.log(childKey, childData);
        });

        document.getElementById("content").childNodes.forEach( (element)=>{
          element.addEventListener('contextmenu', event => event.preventDefault());
        })

    } , {
    onlyOnce: true
  }
); */
onChildAdded(ref(db, "/"), (data) => {
  let d = data.val();

  if(d.message.length< 5)
    document.getElementById(
      "content"
    ).insertAdjacentHTML('beforeend', `<p class="bubble" id="${data.key}" style="left:${d.x}vw; top:${d.y}vh">${d.message}</p>`);
  else
  document.getElementById(
    "content"
  ).insertAdjacentHTML('beforeend', `<p class="bubble speech" id="${data.key}" style="left:${d.x}vw; top:${d.y}vh">${d.message}</p>`);



  document.getElementById(data.key).addEventListener('contextmenu', event => event.preventDefault());
  /*document.getElementById(
    "content"
  ).innerHTML += `<p class="bubble speech" style="left:${d.x}vw; top:${d.y}vh">${d.message}</p>`;*/
  console.log(d);
});

onChildRemoved(ref(db, "/"), (data) => {
  //console.log(document.querySelector(`#${data.key}`).remove())
  console.log(document.getElementById(data.key).remove())
});

/*
remove(ref(db , 'henrik') ).then(() => {
    console.log("alrik removed");
});*/

//db.ref("-Users/-KUanJA9egwmPsJCxXpv").update({ displayName: "New trainer" });

//update( ref( db, alrik), () =>{ message: "New trainer" } );

onValue(
    ref(db, "/"),
    (snapshot) => {
        // root kolla alla namn i root
        console.log("hejsan", snapshot);
    } /*, {
    onlyOnce: true
  }*/
);


