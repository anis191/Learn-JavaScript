// syntax --> arr.forEach(callBackFunction);

let num = [11,22,33,44,55];

num.forEach((val, idx) => {
    document.write(`Index no-${idx}, value- ${val}<br>`);
});

const square = number =>{
    document.write(`Square of ${number} is = ${number * number}<br>`);
}

let arr = [1,2,3,4,5];
arr.forEach(square);