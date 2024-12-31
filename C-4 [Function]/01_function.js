
function calculator(num1, num2, op){
    if (op === '+'){
        return num1 + num2;
    }else if(op === '-'){
        return num1 - num2;
    }else if(op === '*'){
        return num1 * num2;
    }else if(op === '/'){
        return num1 / num2;
    }else if(op === '%'){
        return num1 % num2;
    }else if(op === '**'){
        return num1 ** num2;
    }else{
        return null;
    }
}

let num1 = Number(prompt("Enter a number: "));
let num2 = Number(prompt("Enter another number: "));
let op = prompt("Enter operation[+,-,*,/,%,**]: ");

let result = calculator(num1, num2, op);
if (result === null){
    document.write("Invalid Input");
}else{
    document.write("Result is: ",result);
}