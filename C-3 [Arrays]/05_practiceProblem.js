/*
Let's Practice :
Qs. Create an array to store companies -> “Bloomberg", "Microsoft", "Uber”, “Google”, “IBM”, "Netflix"
a. Remove the first company from the array
b. Remove Uber & Add Ola in its place
c. Add Amazon at the end
*/
let companies = ['Bloomberg', 'Microsoft', 'Uber','Google','IBM', 'Netflix'];
document.write(companies, '<br>');
// a-->
companies.shift();
document.write(companies, '<br>');

// b-->
companies.splice(1,1,'Ola');
document.write(companies, '<br>');

// c-->
companies.push('Amazon');
document.write(companies, '<br>');