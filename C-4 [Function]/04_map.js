// syntax --> let result = arr.map(callBackFunction);

let num = [1,2,3,4,5];

let result = num.map((val) => {
    return val * val;
});

document.write(result);