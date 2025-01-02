let mySet = new Set("Hello");
console.log(mySet); // Output: Set { 1, 2, 3, 4 }
document.write(...mySet, '<br>');

// add item in set -->
mySet.add(12);
mySet.add(19);
document.write(...mySet, '<br>');

// remove item from set -->
mySet.delete(12);
document.write(...mySet, '<br>');

// Checking for a Value: .has(value) -->
let ans1 = mySet.has(9);
document.write(ans1, '<br>');
let ans2 = mySet.has(19);
document.write(ans2, '<br>');

// Size of the Set: .size -->
document.write(mySet.size,'<br>');
mySet.add("anisul alam");
document.write(...mySet, '<br>');
document.write(mySet.size,'\t',typeof(mySet),'<br>');

// Set to Array Conversion -->
let arr = [...mySet];
document.write(arr,'<br>');
document.write(arr.length,'<br>');

// Array to Set Conversion -->
let myArr = [10,10,1,20,20,'a',"Anis",false];
document.write(myArr,'<br>');
let mySet2 = new Set(myArr);
document.write(...mySet2,'<br>');