var firebaseConfig = {
  apiKey: "AIzaSyCIqe0YKPUj110l69PZ2ziQQ5vSoTgpYA0",
  authDomain: "derschnack-4e48d.firebaseapp.com",
  databaseURL: "https://derschnack-4e48d-default-rtdb.firebaseio.com",
  projectId: "derschnack-4e48d",
  storageBucket: "derschnack-4e48d.appspot.com",
  messagingSenderId: "1065289100324",
  appId: "1:1065289100324:web:06ab2acb48e74f1faffcb1"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

  rname=localStorage.getItem("user_name");
  document.getElementById("name").innerHTML="Welcome" + rname + "!";


function addroom()
{
room_name = document.getElementById("roomname").value;

firebase.database().ref("/").child(room_name).update({
  purpose : "adding room name"
});

  localStorage.setItem("room_name", room_name);
  
  window.location = "chat.html";
}
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output_div").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
  firebase_message_id= childKey;
  message_data= childData;

  name= message_data['name'];
  message= message_data['message'];
  like= message_data['like'];
  
  name_tag="<h4>"+ name +"<img class='user_tick' src='t.png'></h4>";
  message_tag="<h4 class='message_h4'>"+ message +"</h4>"
  button_tag="<button class='btn btn-warning'id="+firebase_message_id+" value="+like+" onclick='updateLike(this.id)'>";
  span_tag="<span class='glyphicon glyphicon-thumbs-up'> Like:"+ like +"</span></button><hr>";

row= name_tag + message_tag + button_tag + span_tag;
document.getElementById("output_div").innerHTML +=row;
}}); });}
getData();


function redirectToRoomName(name)
{
  localStorage.setItem("room_name", name);
  window.location="kwitter_page.html";
}
 


function send()
{
  room_name = document.getElementById("roomname").value;
  msg= document.getElementById("msg").value;
  
  firebase.database().ref(room_name).push({
      name:user_name,
      message:msg,
  like:0
  });
  
  document.getElementById("msg").value="";
  }