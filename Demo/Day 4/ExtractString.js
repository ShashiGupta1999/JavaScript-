let String = "Shashi"
console.log(String.length);
console.log(String.at(0));

console.log(String.at(-3));

console.log(String.charAt(0));

console.log(String.charCodeAt(0));


let text = "Apple, Banana, Mango"
let part = text.slice(7, 13)
console.log('part(slice(7,13)) = ' + part)

part = text.slice(7)
console.log('part(slice(7)) = ' + part)

/* If a parameter is negative, the position is counted from the end of the string */
part = text.slice(-12)
console.log('part(slice(-12)) = ' + part)

part = text.slice(-12, -6)
console.log('part(slice(-12,-6)) = ' + part)

/* substring() is similar to slice(). 
   The difference is that start and end values less than 0 are treated as 0 in substring().
*/
console.log("Subtring..........")
part = text.substring(7, 13)
console.log('part(substring(7,13)) = ' + part)


part = text.substring(7)
console.log('part(substring(7)) = ' + part)

part = text.substring(-12)
console.log('part substring(-12) = ' + part)

part = text.substring(-1,5)
console.log('part substring(-1, 5) = ' + part)

/* the second parameter specifies the length of the extracted part. */
console.log("Subtr..........")
part = text.substr(7, 13)
console.log('part substr(7, 13) = ' + part)

part = text.substr(7)
console.log('part substr(7) = ' + part)

part = text.substr(-12)
console.log('partsubstr(-12) = ' + part)

part = text.substr(-1, -5)
console.log('part substr(-1, -5) = ' + part)