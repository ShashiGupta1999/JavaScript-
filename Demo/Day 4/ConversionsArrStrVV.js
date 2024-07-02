let myArray = ["Hi","Hello","Wow"];
console.log(' typeof myArray = ' + typeof myArray);

let sStr = myArray.join(':');
console.log(' sStr  = ' + sStr + ' typeof sStr = ' + typeof sStr);

let myString = "HCL Technologies Bangalore";
myArray = myString.split(" ");
for(let iIndex=0;iIndex<myArray.length;iIndex++)
    console.log(' iIndex = ' + iIndex + " " + myArray[iIndex]);