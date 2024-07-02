let string = "Shashi Gupta"
console.log('String = ' + string + " " + 'typeof = ' + typeof string)

string = 'Shashi "Gupta"'
console.log('String = ' + string + " " + 'typeof = ' + typeof string)


//backquotes => 
string = `Shashi 
"Gupta"
 Punjab`
console.log('String = ' + string + " " + 'typeof = ' + typeof string)


string1 = `Shashi`
string2 = `Gupta`
console.log('String1 = ' + string1 + " " + 'typeof1 = ' + typeof string1)
let sString = `${string1} ${string2}`
console.log(sString + " " + typeof sString)

sStr="Shashi";
let objString = new String("Shashi");
console.log(' type of sStr = ' + typeof sStr);
console.log(' type of objString = ' + typeof objString);