function addNumbers(iFirst,iSecond){
    let iSum = iFirst + iSecond;
    console.log(' iSum  = ' + iSum);
}
addNumbers(3,9);

function swapNumbers(iOne,iTwo){
    console.log(` Beginning of swapNumber() iOne = ${iOne}, iTwo = ${iTwo}`);
    let iTemp = iOne;
    iOne = iTwo;
    iTwo = iTemp;
    console.log(` End of swapNumber() iOne = ${iOne}, iTwo = ${iTwo}`);
}
let i1 = 12, i2 = 21;
console.log(` Before Calling Function i1 = ${i1}, i2 = ${i2}`);
swapNumbers(i1,i2);
console.log(` After Calling Function i1 = ${i1}, i2 = ${i2}`);


