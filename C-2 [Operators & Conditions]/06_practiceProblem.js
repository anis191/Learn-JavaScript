let fullName = prompt("Enter your full name without spaces: ");
let str = `@${fullName.toLowerCase()}${fullName.length}`;
document.write(str);