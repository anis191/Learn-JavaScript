let body = document.querySelector("body");
let icon = document.querySelector(".icon");
let CurrMode = "light";

icon.addEventListener("click", ()=>{
    if(CurrMode === "light"){
        CurrMode = "dark"
        body.style.backgroundColor = "black";
        body.style.color = "white";
    }else{
        CurrMode = "light";
        body.style.backgroundColor = "white";
        body.style.color = "black";
    }
});
