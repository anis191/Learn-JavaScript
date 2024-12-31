let marks = [85, 97, 44, 37, 76, 60];
let sum = 0;
for(let value of marks){
    sum += value;
}
let avg = sum / marks.length;
document.write(avg); 