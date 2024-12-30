let str = "Hello World";
document.write(`The size of \" ${str} \" is : ${str.length}<br>`);
document.write(str[0], str[1], str[str.length-1], "<br>");

// string methods:
document.write(str.toUpperCase(), "<br>");
document.write(str.toLowerCase(), "<br>");

// just print "ello" -->
document.write(str.slice(1, 5), "<br>");

// concatination -->
let str2 = ". How are you?"
document.write(str.concat(str2),'<br>');

let str3 = "ab aabb cd ccdd ef eeff";
// replace 'a'-->
document.write(str3.replace('a', 'A'), '<br>');

document.write(str3.replaceAll('b','B'));