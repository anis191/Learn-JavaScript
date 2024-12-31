let arr = [1,2,3,4,5,6,7,8];
// 1.push()-->
arr.push(9);
document.write(arr, '<br>');

// 2.pop()-->
arr.pop();
document.write(arr, '<br>');

// 3. unshift()-->
arr.unshift(99);
document.write(arr, '<br>');

// 4. shift()-->
arr.shift();
document.write(arr, '<br>');

// 5.toString()-->
let num = [1,3,5,7];
document.write(num, '\t', typeof(num), '<br>');
num = num.toString();
document.write(num, '\t', typeof(num), '<br>');

// 6.concat()-->
let newArr = arr.concat(num);
document.write(newArr, '<br>');

// 7.slice()-->
// we slice 'a' --> '3,4,5,6,7'
let a = [1,2,3,4,5,6,7,8,9,10];
let new_a = a.slice(2, 7)
document.write(new_a, '<br>');
document.write(a, '<br>');

// 8.splice()-->
a.splice(0, 2);
document.write(a, '<br>');
a.splice(5);
document.write(a, '<br>');