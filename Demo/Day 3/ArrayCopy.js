var aiNumber = [10,20,30,40,50];

/* Pass By Reference */
var aiCopy = aiNumber;
console.log(' aiNumber  = ' + aiNumber + ' aiCopy  = ' + aiCopy);
aiNumber[2] = 300;
console.log(' aiNumber  = ' + aiNumber + ' aiCopy  = ' + aiCopy);

/* Pass By Value */
var aiPassByValue = new Array(aiNumber.length);
for(let iIndex=0;iIndex<aiNumber.length;iIndex++){
    aiPassByValue[iIndex] = aiNumber[iIndex];
}
console.log(' aiNumber  = ' + aiNumber + ' aiPassByValue  = ' + aiPassByValue);
aiNumber[3] = 400;
console.log(' aiNumber  = ' + aiNumber + ' aiPassByValue  = ' + aiPassByValue);

/* To Finetune Pass by Value in ES6 Spread operator (ie. ...  ) */
var aiCpy = [10,10,10,...aiNumber,60,70,80,90];
console.log(' aiNumber  = ' + aiNumber + ' aiCpy = ' + aiCpy);
aiNumber[5] = 500;
console.log(' aiNumber  = ' + aiNumber + ' aiCpy = ' + aiCpy);

/* Used to copy the elements within the array itself */
let aiArray = [1, 2, 3, 4, 5, 6, 7];
aiArray.copyWithin(0, 3, 6);
console.log(' aiArray = ' + aiArray);

aiArray = [1, 2, 3, 4, 5, 6, 7];
aiArray.copyWithin(0, 3);
console.log(' aiArray = ' + aiArray);

aiArray = [1, 2, 3, 4, 5, 6, 7];
aiArray.copyWithin(5);
console.log(' aiArray = ' + aiArray);