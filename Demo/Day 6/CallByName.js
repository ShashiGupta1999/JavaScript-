demoFunction();

function demoFunction(){
    console.log(' Within demoFunction() ');
}

let iValue=12,sFunction = function(){

}
sFunction = demoFunction;
console.log(' sFunction = ' + sFunction);
sFunction();