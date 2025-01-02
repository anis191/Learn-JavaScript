let heading = document.querySelector("h2");
heading.innerText = heading.innerText + " from puc."; //Concat two string using '+' sign.

let all_box = document.querySelectorAll(".box");
console.log(all_box);

all_box[0].innerText = all_box[0].innerText +`\nThis is added content - 1`;

all_box[1].innerText = all_box[1].innerText +`\nThis is added content - 2`;

all_box[2].innerText = all_box[2].innerText +`\nThis is added content - 3`;

