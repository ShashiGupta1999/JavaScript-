/*1. Write a JS Program to check whether the given number is perfect or not ?

	Perfect : 6
		  |-> Find the divisors 1,2,3
		      Sum of the divisor is equal to the given number 

              */

function isPerfectNumber(num) {
    if (num <= 1)
         return false; 
    let sum = 0;
    for (let i = 1; i <= num / 2; i++) {
        if (num % i === 0) {
            sum += i;
        }
    }

    return sum === num;
}
 
// Test the function
const number = 28; 
if (isPerfectNumber(number)) {
    console.log(`${number} is a perfect number.`);
} else {
    console.log(`${number} is not a perfect number.`);
}