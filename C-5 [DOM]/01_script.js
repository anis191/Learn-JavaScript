// alert("Check JS file link!");
let heading = document.getElementById("heading-1");
console.log(heading);

let headings = document.getElementsByClassName("heading");
console.log(headings[0]);
console.log(headings[1]);
console.log(headings[2]);

let All_P_tags = document.getElementsByTagName("p");
console.log(All_P_tags);

for(let i=0; i<All_P_tags.length; i++){
    console.log(All_P_tags[i]);
}

let first_P_element = document.querySelector("p");
console.log(first_P_element);

let all_p_elements = document.querySelectorAll("p");
console.log(all_p_elements);

let para_elements = document.querySelector(".para");
console.log(para_elements);

let all_para_elements = document.querySelectorAll(".para");
console.log(all_para_elements);

// property-->
let t_name = document.querySelector("#p-1");
console.log(t_name.tagName);
let t_name2 = document.querySelector(".heading");
console.log(t_name2.tagName);

// DOM tree -->
let all_div = document.querySelector(".container").children;
console.log(all_div);
