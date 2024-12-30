// print 1 - 20 all even number-->
// 1. Using for loop
document.write("All even between 1 to 20: ");
for(let i=1; i<=20; i++){
    if (i % 2 === 0){
        document.write(i, '\t');
    }
}
document.write("<br>");

// 2. Using while loop
document.write("All odd between 1 to 20: ");
let i=1;
while(i <= 20){
    if(i % 2 !== 0){
        document.write(i,"\t");
    }
    i++;
}
document.write("<br>");

// 3. Using Do while loop
document.write("All [N % 3 == 0] numbers between 1 to 20: ");
let j = 1;
do{
    if(j % 3 === 0){
        document.write(j,'\t');
    }
    j++;
}while(j <= 20);
document.write("<br>");

// 4. Using for-of loop
let str = "Anisul Alam";
let size = 0
for(let char of str){
    document.write(char,"<br>");
    size ++;
}
document.write("The size of string is: ", size);
document.write("<br>");

// 5. Using for-in loop
const info = {
    name : "Ariful Islam",
    age : 26,
    address : 'Ctg',
    isPass : true,
};
for(let key in info){
    document.write("Key--> ", key, " value: ",info[key], '<br>');
}