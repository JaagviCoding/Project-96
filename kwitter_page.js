//YOUR FIREBASE LINKS
// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyC4w14nHvrC2_3BDFc2VoEj4meQJACqgzo",
      authDomain: "kwitter-test-e8054.firebaseapp.com",
      databaseURL: "https://kwitter-test-e8054-default-rtdb.firebaseio.com",
      projectId: "kwitter-test-e8054",
      storageBucket: "kwitter-test-e8054.appspot.com",
      messagingSenderId: "538534832574",
      appId: "1:538534832574:web:97f62afd7fe01692b071ef"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    user_name = localStorage.getItem("user_name");
    room_name = localStorage.getItem("room_name");

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";

}
function send()
{
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });
      document.getElementById("msg").value = "";

}


