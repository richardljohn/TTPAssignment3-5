
const B1 = document.getElementById("Button1");
const B2 = document.getElementById("Button2");

Button1.onclick = function() { 
    message.innerText = "I'm right.";
    console.log(message);
}

Button2.onclick = function(){
    message.innerText = "No, I'm right!";
    console.log(message);
}



//Question #2

const doNot = document.getElementById("Don't Hover");

function warn(){
    alert("Hey, I told you not to hover over me!");
}

//Question #4

function check() {
    let user = document.forms["User"]["userID"].value;
    let pass = document.forms["User"]["password"].value;
    if(pass != "12345678"){
        alert("Permission Denied.");
        outMessage.innerText = "Permission Denied."; 
        console.log(outMessage);
    }
    else {
        alert("Permission Granted.");
        outMessage.innerTest = "Permission Granted."
        console.log(outMessage);
    }
}

