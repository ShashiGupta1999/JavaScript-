function funFirst (){
    return " Within funFirst() ";
}
async function funSecond(){
   setTimeout(function(){
       return ' Demo within setTimeOut() '
   },2000);    
}
function funThird() {
   return ' Within funThird() ';
}

function funInvoke(){
   let returnFunFirst = funFirst();
   console.log(' returnFunFirst = ' + returnFunFirst);

   let returnFunSecond = funSecond();
   console.log(' returnFunSecond = ' + returnFunSecond);

   let returnFunThird = funThird();
   console.log(' returnFunThird = ' + returnFunThird);
}

funInvoke();