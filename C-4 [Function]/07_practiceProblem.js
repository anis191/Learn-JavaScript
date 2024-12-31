/*
Let's Practice:
Qs-1. We are given array of marks of students. Filter our of the marks of students that scored 90+.

Qs-2. Take a number n as input from user. Create an array of numbers from 1 to n.
Use the reduce method to calculate sum of all numbers in the array.
Use the reduce method to calculate product of all numbers in the array.
*/
// ans to the question No-1:
let marks = [80,85,91,78,56,99,91,34,90];

const resultArr = marks.filter((value) => {
    if(value >= 90){
        return value;
    }
});
document.write(`All 90+ marks = ${resultArr}<br>`);

// ans to the question No-2:
let num = Number(prompt("Enter a number: "));
let arr = [];
for(let i=0; i<num; i++){
    arr[i] = i+1;
};

let sum = arr.reduce((prev, curr) =>{
    return prev += curr;
});
document.write(`Sum is : ${sum}<br>`);

let mul = arr.reduce((prev, curr) =>{
    return prev * curr;
});
document.write(`Product is : ${mul}<br>`);