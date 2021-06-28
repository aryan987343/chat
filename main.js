function log_in() {
    user = document.getElementById("user_name_input").value;
    
    localStorage.setItem("user", user);
    
    window.location = "room.html"
    }