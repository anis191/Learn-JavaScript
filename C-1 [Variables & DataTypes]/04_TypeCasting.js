// 1. toString -->
let num = 20;
console.log(typeof(num));
num = num.toString();
console.log(typeof(num));

// 2. to number -->
let str = "102";
console.log(typeof(str));
str = parseInt(str);
console.log(typeof(str));

let str2 = "15.456";
console.log(str2, "is a: ",typeof(str2))
str2 = parseInt(str2)
console.log(str2, "is a: ",typeof(str2))
str2 = "15.456";
str2 = parseFloat(str2)
console.log(str2, "is a: ",typeof(str2))