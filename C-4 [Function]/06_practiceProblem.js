/*
Let's Practice:
Qs-1. Create a function using the “function” keyword that takes a String as an argument & returns the number of vowels in the string.
Qs-2. Create an arrow function to perform the same task.
*/

// ans to the Q:1 -->
/*
function CountVowels(str){
    let total = 0;
    for(let char of str){
        char = char.toLowerCase();
        (char==='a'||char==='e'||char==='i'||char==='o'||char==='u') ? total++ : total = total;
    }
    return total;
}

let str = prompt("Enter a text: ");
let total = CountVowels(str);
document.write(total);
*/
// ans to the Q:2 -->
let str2 = prompt("Enter a text: ");

const totalVowels = str2 =>{
    let total = 0;
    for(let char of str2){
        char = char.toLowerCase();
        (char==='a'||char==='e'||char==='i'||char==='o'||char==='u') ? total++ : total = total;
    }
    return total;
}

let ans = totalVowels(str2);
document.write(ans);