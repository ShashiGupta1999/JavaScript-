function convertStringToArray(str){
    return str.split('');
}
console.log(convertStringToArray("TNUICU"))

let myString = "HCL Technologies Bangalore";
myArray = myString.split(" ");
for(let iIndex=0;iIndex<myArray.length;iIndex++)
    console.log(' iIndex = ' + iIndex + " " + myArray[iIndex]);