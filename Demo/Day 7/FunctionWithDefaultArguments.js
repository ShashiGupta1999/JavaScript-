function funWithDefaultValue(frmParam1=12,frmParam2){
    console.log(' frmParam1 = ' + frmParam1);
    console.log(' frmParam2 = ' + frmParam2);
    console.log(arguments);
}
//funWithDefaultValue(12,21);
//funWithDefaultValue(3);
//funWithDefaultValue(3,"Magesh");
funWithDefaultValue(3);