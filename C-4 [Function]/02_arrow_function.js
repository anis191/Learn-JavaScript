const sum = (a,b) => a+b;
document.write(sum(10,5), '<br>');

let num = [1,2,3,4,5];
// Do all array value square-->
const square = val => (val*val);
for(let val of num){
    document.write(square(val),'\t');
}
document.write("<br>");

let names = ["anis", "asif", "karim", 'khan'];
const greeting = name => `Hello ${name}<br>`;
for(let name of names){
    let result = greeting(name)
    document.write(result);
}