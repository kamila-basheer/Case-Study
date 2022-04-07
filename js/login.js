function userHelp(){
    var user = document.getElementById("USERHelp");
    user.style.display="block";
    user.style.color="darkslategray";
    user.innerHTML = "Enter Username : admin";
}

function passHelp(){
    var password = document.getElementById("PaSSHelp");
    password.style.display="block";
    password.style.color="darkslategray";
    password.innerHTML = "Enter Password : 12345";
}

function uCheck(){
    var user = document.getElementById("User");
    var uHelp = document.getElementById("USERHelp");
    if(user.value=="admin"){
        user.style.display="block";
        uHelp.style.color="green";
        uHelp.innerHTML = "Valid username"
    }
    else if(user.value!="admin"){
        user.style.display="block";
        uHelp.style.color="red";
        uHelp.innerHTML = "Invalid username"
    }
    else{
        uHelp.style.color="blue";
    }
}

function pCheck(){
    var password = document.getElementById("Password");
    var pHelp = document.getElementById("PaSSHelp");
    if(password.value=="12345"){
        password.style.display="block";
        pHelp.style.color="green"
        pHelp.innerHTML = "Valid password"
    }
    else if(password.value!="12345"){
        password.style.display="block";
        pHelp.style.color="red"
        pHelp.innerHTML = "Invalid password"
    }
    else{
        pHelp.style.color="blue";
    }
}

const form = document.querySelector("form");
function valid(){
    get(validation);
}
       
function get(callback){
    var user = document.getElementById("User");
    var pass = document.getElementById("Password");
    
    callback(user,pass);
}

function validation(u,p){
    if((u.value=="admin")&&(p.value=="12345"))
    {
        form.action="./todolist.html" ;
    }
    else {
        e.preventDefault();        
    }
}



