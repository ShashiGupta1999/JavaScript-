/* HOF  : 
     A function which either,
        1. takes function as an argument or
        2. return a function 
*/
function fnHOF(){
    return function(){
        console.log(' Within Anonymous function returned by fnHOF ');
    }
}
let retValueOfFn = fnHOF();
retValueOfFn();

function fnHOFwithFnParam(fnAsArgs){
    fnAsArgs();
}
fnHOFwithFnParam(function(){
    console.log(' Within Function ');
});

let sArgs = function demoFunction(){
    console.log(' Within demoFunction() ');
}

fnHOFwithFnParam(sArgs);