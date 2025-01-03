let firstH1 = document.querySelector("h1");
console.log(firstH1);

// inside attribute value -->
console.log(firstH1.getAttribute("id"));
console.log(firstH1.getAttribute("class"));

// set inside attribute value -->
firstH1.setAttribute("id", "heading-1");
console.log(firstH1.getAttribute("id"));
firstH1.setAttribute("class", "h-1");
console.log(firstH1.getAttribute("class"));

// add new attribute and value -->
firstH1.setAttribute("name", "1st-heading");
console.log(firstH1.getAttribute("name"));

// Add Element and remove-->
// 1. add a paragraph:
// append -->
let para1 = document.createElement("p");
para1.innerHTML = "<em><br>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum maxime ullam laudantium odit veniam accusantium reprehenderit nulla eum soluta nihil.</em>";
para1.style.width = "40vw";
para1.style.border = "4px solid black";
para1.style.padding = "10px";

let heading1 = document.querySelector("h1");
heading1.append(para1);

para1.setAttribute("id", "p-1");

// prepend -->
let username = document.createElement("input");
username.placeholder = "Enter your name";
username.style.padding = "5px";
username.style.margin = "5px 5px 5px 0px";
username.setAttribute("class", "in-1")

para1.prepend(username);

// after -->
let btn1 = document.createElement("button");
btn1.innerText = "Submit";
btn1.setAttribute("id","btn-1");

username.after(btn1);

// before -->
let title = document.createElement("span");
title.innerHTML = "<strong>Read and Submit</strong>";
title.style.display = "block";

para1.before(title);

// remove -->
title.remove();