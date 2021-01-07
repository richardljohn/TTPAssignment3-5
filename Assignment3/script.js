// 1) Select the section with an id of container without using querySelector.
const section = document.getElementById("container"); 

// 2) Select the section with an id of container using querySelector.
const sectionQS = document.querySelector("container");

// 3) Select all of the list items with a class of "second".
const allList = document.querySelectorAll("second");

// 4) Select a list item with a class of third, but only the list item inside of the ol tag.
console.log(document.querySelector("#container > ol > li.third"));

// 5) Give the section with an id of container the text "Hello!". *In order for later questions to work, we have to comment out these lines.*
// const hello = document.getElementById("container");
// hello.innerText = "Hello!";

// 6) Add the class main to the div with a class of footer.
let footer = document.getElementsByClassName("footer")[0];
footer.classList.add("main");
// console.log(footer);

// 7) Remove the class main on the div with a class of footer.
footer.remove("main");

// 8) Create a new li element.
const nLi = document.createElement("li");

// 9) Give the li the text "four".
nLi.innerText = "four";
console.log(nLi);

// 10) Append the li to the ul element.
const ul = document.querySelector('ul');
ul.append(nLi);
console.log(ul);

// 12) Loop over all of the lis inside the ol tag and give them a background color of "green".
const ols = document.querySelectorAll("ol li");
for(let i = 0; i < ols.length; i++){
    ols[i].style.backgroundColor = "green";
}

// 13) Remove the div with a class of footer.
footer.remove("div");