function RestOperator(iNo,...iaArgs){
 console.log(iNo)
 console.log(iaArgs)
 console.log("iaArgs " + iaArgs)
 console.log(arguments)
 console.log("arguments " + arguments)

}

RestOperator(1,2,3,4,5,"6",7,true)