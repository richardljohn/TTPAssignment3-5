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