function sunOfNumbers(){
    console.log('within sumofnumbers')
    console.log(arguments)
    for(let i=0;i<arguments.length;i++){
        //console.log(i);
        console.log(arguments[i]);

    }
}

sunOfNumbers(1,2,3,4,5,6)