function funFirst (){
    return " Within funFirst() ";
}
async function funSecond(){
   return new Promise((resolve,reject)=>{
      setTimeout(()=>{
        resolve(' Demo within setTimeOut() ');
      },2000);
   });
}
function funThird() {
   return ' Within funThird() ';
}

async function funInvoke(){
   let returnFunFirst = funFirst();
   console.log(' returnFunFirst = ' + returnFunFirst);

   let returnFunSecond = await funSecond();
   console.log(' returnFunSecond = ' + returnFunSecond);
   

   let returnFunThird = funThird();
   console.log(' returnFunThird = ' + returnFunThird);
}

funInvoke();