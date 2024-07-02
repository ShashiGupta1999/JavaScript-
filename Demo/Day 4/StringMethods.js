let text1 = "      Hello World!      ";
let text2 = text1.trim();
console.log(' trim() = ' + text2);

text2 = text1.trimStart();
console.log(' text1.trimStart() = ' + text2);

text2 = text1.trimEnd();
console.log(' text1.trimEnd() = ' + text2);

let text = "5";
let padded = text.padStart(4,"x");
console.log(' text.padStrar(4,"x") = ' + padded);

padded = text.padEnd(4,"x");
console.log(' text.padEnd(4,"x") = ' + padded);

let numb = 5;
text = numb.toString();
padded = text.padStart(4,"x");
console.log(' text.padStrar(4,"x") = ' + padded);

text = "Please visit Microsoft and Microsoft!";
let newText = text.replace("Microsoft", "W3Schools");
console.log(' newText = ' + newText);
newText = text.replace(/Microsoft/g, "W3Schools");
console.log(' newText = ' + newText);

text = "I love cats. Cats are very easy to love. Cats are very popular";
text = text.replaceAll(/Cats/g,"Dogs");
text = text.replaceAll(/cats/g,"dogs");
console.log(' Text  = ' + text);


text = "The rain in SPAIN stays mainly in the plain";
console.log('match : ' + text.match("ain"));
console.log('search : ' + text.search("ain"));

let myArr = text.match(/ain/g);
console.log(myArr);