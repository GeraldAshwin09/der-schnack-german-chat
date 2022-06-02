function login()
{
   user_name=document.getElementById("userid").value;
    localStorage.setItem("user_name",user_name);
    window.location="room.html";
}

function info()
{
    window.location="word.html";
}

function back()
{
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location="index.html";
}

