    
    var x = document.getElementById("beforeLogin");
    var y = document.getElementById("afterLogin");

    function login(){
        window.open("login.html");
    }

    function loggedInView() {

        var userName = localStorage.getItem("User Id");
        var logout = '<span style="margin-top:20px;">Welcome...</span><button type="button" class="loginBtn" onclick="onClicklogout()">Log Out</button>';

        x.style.display = "none";
        y.style.display = "block";

        document.getElementById("afterLogin").innerHTML = logout + userName; 
    }

    function onClicklogout() {
        x.style.display = "block";
        y.style.display = "none";
    }