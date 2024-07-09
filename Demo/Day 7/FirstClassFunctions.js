/* FirstClass Functions : 
    1. When we assing a function to variable or
    2. Whenever a function takes function as a parameter or
    3. When a function returning a function
*/

let funAsArgs = function goodToGo(){
    console.log(' Getting Strong Foundation in JavaScript ');
}
console.log(typeof funAsArgs);

function funWithFunctionAsParam(frmPramValue1,frmParamValue2,frmParamFunArg){
    console.log(arguments);
    let iResult = frmPramValue1 + frmParamValue2;
    console.log(' iResult  = ' + iResult);
    frmParamFunArg();
}

funWithFunctionAsParam(12,21,funAsArgs);

/*
function addNumbers(iFirst,iSecond){
    let iSum = iFirst + iSecond;
    return iSum;
}
let iAddedValue = addNumbers(3,12);
console.log(' iAddedValue = ' + iAddedValue);
*/

function funcReturnsAFunction(){
    return function demoFunction(){
        console.log(' Within demoFunction()');
    }
}

let catchFuncReturn = funcReturnsAFunction();
console.log(' catchFuncReturn = ' + catchFuncReturn);
catchFuncReturn();