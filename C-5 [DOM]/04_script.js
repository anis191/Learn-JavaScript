let all_box = document.querySelectorAll(".box");

all_box.forEach((div, idx) =>{
    div.innerText = `Div - ${idx+1}`;
});

let div2 = document.querySelector("#d-2");
div2.style.backgroundColor = "black";
// div2.style.fontSize = "22px";
div2.style.padding = "15px";
div2.style.border = "3px solid yellow";

let input = prompt("Even or Odd");
if(input === 'Even' || input === 'even'){
    all_box.forEach((div, idx)=>{
        if((idx+1) % 2 != 0){
            div.style.visibility = "hidden";
        }
    });
}else if(input ==='Odd' || input === 'odd'){
    all_box.forEach((div,idx)=>{
        if((idx+1) % 2 == 0){
            div.style.visibility = "hidden";
        }
    });
}
