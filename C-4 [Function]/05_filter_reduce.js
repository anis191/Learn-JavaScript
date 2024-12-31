// 1. filter-->
let num = [1,2,3,4,5,6,7,8,9,10];
// find all even numbers using filter-->
let allEven = num.filter((val) => {
    if(val % 2 === 0){
        return val;
    }
});

document.write(allEven, '<br>');

// 2. reduce-->
let arr = [1,34,2,3,99,82];
// find the max number:
const output = arr.reduce((prev, curr) =>{
    return (prev > curr) ? prev : curr;
});
document.write(`Max number is : ${output}<br>`);

// find the sum:
const sum = arr.reduce((prev, curr) =>{
    return prev += curr;
});
document.write(`Sum is : ${sum}<br>`);