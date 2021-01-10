/*
Create an HTML page with two buttons that argue with each other. 
When one button is clicked, the text "I'm right" should be placed next to it. 
When the other button is clicked, the text is replaced with, "No, I'm right!"
*/

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



/*Create an HTML page with a large element on the page that says "Don't hover over me" inside of it. 
When you hover over the element, send an alert to the user that says, "Hey, I told you not to hover over me!
*/ 

const doNot = document.getElementById("Don't Hover");

function warn(){
    alert("Hey, I told you not to hover over me!");
}

//Question #4
/*
Create an HTML page with a form. It should include inputs for a username, email, and password. Also a submit button. (Done in index.html)
In a Javascript file, write a program which checks the following things:
checks that the password is 12345678
if the password is incorrect, send an alert message
Your page should also include an <h1> tag. If the information in the form is correct, have Javascript change the text in the <h1>.HTML page.
Add a CSS stylesheet that styles all of your pages.
*/

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

//Add a CSS stylesheet that styles all of your pages. (Question done in style.css.)