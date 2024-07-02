function isArmstrongNumber(num) {
    const numStr = num.toString();
    const power = numStr.length;
    let sum = 0;
 
    for (let digit of numStr) {
        sum += Math.pow(parseInt(digit), power);
    }
 
    return sum === num;
}
 
//Example
const number = 153;
if (isArmstrongNumber(number)) {
    console.log(number + " is an Armstrong number.");
} else {
    console.log(number + " is not an Armstrong number.");
}

const number1 = 183; 
if (isArmstrongNumber(number1)) {
    console.log(number1 + " is an Armstrong number.");
} else {
    console.log(number1 + " is not an Armstrong number.");
}