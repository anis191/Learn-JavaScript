let btn1 = document.querySelector(".btn1");
btn1.addEventListener("click", (details) =>{
    console.log("Button-1 was clicked!");
});
btn1.addEventListener("click", (details)=>{
    btn1.style.backgroundColor = "red";
});

let btn2 = document.querySelector(".btn2");
btn2.addEventListener("dblclick", ()=>{
    console.log("You click two times!");
    btn2.innerText = "Button-2[Done]";
});

// "mousemove" is actually css- :hover-->
let d1 = document.querySelector(".d1");
d1.addEventListener("mousemove", ()=>{
    d1.style.backgroundColor = "yellow";
});
d1.addEventListener("mouseout", ()=>{
    d1.style.backgroundColor = "red";
});

let d2 = document.querySelector(".d2");
d2.addEventListener("mouseover",()=>{
    d2.style.backgroundColor = "green";
});
d2.addEventListener("mouseout", ()=>{
    d2.style.backgroundColor = "red";
});