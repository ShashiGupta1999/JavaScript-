function fnOuterDemo(ifnOuterArgs) {
    function fnInnerDemo(ifnInnerArgs) {
        return ifnOuterArgs + ifnInnerArgs;
    }
    return fnInnerDemo;
}
let returnValue = fnOuterDemo(5);
console.log(' returnValue = ' + returnValue);
console.log(returnValue(4));
console.log(returnValue(3));