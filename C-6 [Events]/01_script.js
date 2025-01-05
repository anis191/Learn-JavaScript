let btn1 = document.querySelector(".btn1");
/*
btn1.onclick = () =>{
    console.log("Click button no -1 'DONE' ");    
};
*/
btn1.addEventListener("click", (details)=>{
    console.log("Click button no -1 'DONE' ");
    console.log(details.type);
    console.log(details.target);
});

let btn2 = document.querySelector(".btn2");
/*
btn2.onclick = ()=>{
    console.log("Click button no -2 'DONE' ");    
};
*/
btn2.addEventListener("click", (details)=>{
    console.log("Click button no -2 'DONE' ");
    console.log(details.type);
    console.log(details.target);
});