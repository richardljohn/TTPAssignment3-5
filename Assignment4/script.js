
const B1 = document.getElementById("Button1");
const B2 = document.getElementById("Button2");

Button1.onclick = function() { 
    message.innerText = "I'm Right.";
    console.log(message);
}

Button2.onclick = function(){
    message.innerText = "No, I'm right!";
    console.log(message);
}

//Question #2

const doNot = document.getElementById("Don't Hover");

function warn(){
    alert("I TOLD YOU NOT TO HOVER OVER ME!");
}

//Question #3

const B3 = document.getElementById("account");
const pass = document.getElementById("password")

B3.onclick = function() {
    if(pass.innerText === "12345678"){
        valid.innerText = "Welcome!";
        console.log(valid);
    }
    else {
        alert("Incorrect Password!");
    }
}