function funFirst (){
    console.log(' Within funFirst()');
}
function funSecond(){
    setTimeout(function(){
        console.log(' Demo within setTimeOut() ')
    },2000);
    console.log(' Within funSecond() ');
}
function funThird() {
    console.log(' Witing funThird() ');
}

funFirst();
funSecond();
funThird();