let all_box = document.querySelectorAll(".box");

all_box.forEach((div, idx) =>{
    div.innerText = `Div - ${idx+1}`;
});