let price = [250, 645, 300, 900, 50];

for(let i=0; i<price.length; i++){
    let discountAmount = (price[i] * 10) / 100;
    price[i] = price[i] - discountAmount;
}

for(let value of price){
    document.write(value, '\t');
}