var firebaseConfig = {
  apiKey: "AIzaSyBTq4WL4sYodgXTa5mnofc1yspu9D7u0fQ",
  authDomain: "kwitter-web-app-afd1d.firebaseapp.com",
  databaseURL: "https://kwitter-web-app-afd1d-default-rtdb.firebaseio.com",
  projectId: "kwitter-web-app-afd1d",
  storageBucket: "kwitter-web-app-afd1d.appspot.com",
  messagingSenderId: "788426937665",
  appId: "1:788426937665:web:e82e39a00edb0bb59dbdc0",
  measurementId: "G-62FT31M297"
};

// Initialize Firebase

firebase.initializeApp(firebaseConfig);
user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom(){
  room_name = document.getElementById("room_name").value;
  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });
    localStorage.setItem("room_name", room_name);
    window.location = "kwitter_page.html";
}

function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });

}

getData();

function redirectToRoomName(name){
  console.log(name);
  localStorage.setItem("room_name", name);
  window.location = "kwitter_page.html";
}

function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
    window.location = "kwitter.html";
}
