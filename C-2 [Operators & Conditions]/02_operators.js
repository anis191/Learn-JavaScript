// 1. Arithmetic Operators-->
// let a = Number(prompt("Enter a number: "));
// let b = Number(prompt("Enter another number: "));
let a = 10;
let b = 5;
document.write(a + '+' + b + '=' + (a+b) + '<br>');
document.write(a + '-' + b + '=' + (a-b) + '<br>');
document.write(a + '*' + b + '=' + (a*b) + '<br>');
document.write(a + '/' + b + '=' + (a/b) + '<br>');

// 2.Unary Operators-->
document.write(a,'<br>');
a++;
document.write(a, '<br>');
++a
document.write(a, '<br>');

// 3.Comparison Operators -->
if (a == b){
    document.write("True<br>");
}else{
    document.write("False<br>");
}

let str = "5";
if (str == 5){
    document.write(true, "<br>");
}else{
    document.write(false, "<br>");
}

if(str === 5){
    document.write(true, "<br>");
}else{
    document.write(false, "<br>");
}