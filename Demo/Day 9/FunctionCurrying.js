function demoFunction(){
    return function(){
        console.log(' Function returned by demoFunction() ')
    }
}

let sCatchValue = demoFunction();
console.log(' sCatchValue = ' + sCatchValue);
sCatchValue();

function addNumbers(iFirst,iSecond){
    let iSum = iFirst + iSecond;
    console.log(' iSum = ' + iSum);
}
addNumbers(12,21);
function addNumbers(iFirst){
   let iSum;
   return function(iSecond){
       iSum = iFirst + iSecond;
       console.log(' iSum = ' + iSum);
   }
}

addNumbers(12)(21);
