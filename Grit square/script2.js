
        // Import the functions you need from the SDKs you need
      
        import { initializeApp } from "https://www.gstatic.com/firebasejs/9.16.0/firebase-app.js";
        import { getDatabase, ref, set, onValue, remove, push } from "https://www.gstatic.com/firebasejs/9.16.0/firebase-database.js"; // <---

        // TODO: Add SDKs for Firebase products that you want to use
      
        // https://firebase.google.com/docs/web/setup#available-libraries
      
        // Your web app's Firebase configuration
      
        const firebaseConfig = {
          databaseURL: "https://demo1-3c759-default-rtdb.europe-west1.firebasedatabase.app/", // <----
          apiKey: "AIzaSyDkRmoWLJ0eEXZKYEeUNwRF8V6X0oHwBi0",
          authDomain: "demo1-3c759.firebaseapp.com",
          projectId: "demo1-3c759",
          storageBucket: "demo1-3c759.appspot.com",
          messagingSenderId: "632318648569",
          appId: "1:632318648569:web:60f9813437fa829e598228"
        };
      
        // Initialize Firebase
      
        const app = initializeApp(firebaseConfig);
        const db = getDatabase(app);  // <-----

        console.log(db);

document.getElementById("btn").addEventListener(  
"click",(event) =>{
    let inputName= document.getElementById("inName").value
    console.log(inputName);
    set( ref(db, inputName) , {
        dateOfCretion: new Date().toString('yyyy-MM-dd hh:mm:ss'),
        message:"hell world",
    });
}
)
        
function writeUserData() {
    let inputName= document.getElementById("inName").value
    console.log(inputName);
    set( ref(db, inputName) , {
        message:"hello",
        dateOfCretion: new Date()
    });
  }
//writeUserData()


onValue( ref(db,'Alrik') , (snapshot) => {
    const data = snapshot.val();
    //alert(data.message)
    //document.body.innerHTML= data.message;
  },{onlyOnce: true}
);



onValue(ref(db,'/'), (snapshot) => {  // root kolla alla namn i root
    snapshot.forEach((childSnapshot) => {
      const childKey = childSnapshot.key;
      const childData = childSnapshot.val();

      document.getElementById("content").innerHTML += "<p>"+childKey+"  "+childData.message+"</p>" + "<br>"
      console.log(childKey,childData)
    });
  }/*, {
    onlyOnce: true
  }*/);


remove(ref(db , 'henrik') ).then(() => {
    console.log("alrik removed");
});


//db.ref("-Users/-KUanJA9egwmPsJCxXpv").update({ displayName: "New trainer" });

//update( ref( db, alrik), () =>{ message: "New trainer" } );



onValue(ref(db,'/'), (snapshot) => {  // root kolla alla namn i root
    console.log("hejsan",snapshot)
  }/*, {
    onlyOnce: true
  }*/);