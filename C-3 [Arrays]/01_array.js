let names = ["anis","arif",'shariar',"muhi"];
document.write(names, '<br>', typeof(names), '<br>');

let numbers = [10,20,30,60];
document.write(numbers.length, '<br>');

for(let i=0; i<names.length; i++){
    document.write(names[i], '\t');
}
document.write("<br>");

for(let value of numbers){
    document.write(value, '\t');
}