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

function b(){
  y=localStorage.getItem("Username");
  document.getElementById("a").innerHTML="Welcome  "+y+"!"; 
  x=document.getElementById("roomname").value;
  firebase.database().ref("/").child(x).update({
    purpse:"I have added the room name"
  });
}
function A(){
  localStorage.setItem("lroomname",x);
  window.location="kwitter_page.html";
  function getData() {
    firebase.database().ref("/").on('value', function(snapshot) {
      document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {
        childKey  = childSnapshot.key;
        Room_names = childKey;
        //Start code
        console.log("Room name is"+Room_names);
        row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
        document.getElementById("output").innerHTML+=row;
        //End code
      });
    });
  }
}
getData();
function LO(){
  window.location="index.html";
  localStorage.removeItem("Username");
  localStorage.removeItem("lroomname");
}
function redirectToRoomName(y){
  console.log(y);
  localStorage.setItem("lroommname",y);
}