let Func1 = function one(){

}
let Func2 = function two(Func1){

}
let Func3 = function three(Func2){

}
let Func4 = function four(Func3){

}
let Func5 = function five(Func4){

}

console.log(Func5);
Func5(Func4(Func3(Func2(Func1()))));



//Func5(Func4(Func3(Func2)));