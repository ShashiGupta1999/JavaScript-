// 4. Write a JS Program to find the factorial of the given number ?
// 	I/p : 0
// 	O/p : 1

// 	I/p : 3
// 	O/p : 6

function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    
    return result;
    
}
 
//console.log(`The factorial of ${factorial(5)} is: ${result}`);

// Example1 
// const number = 5; 
const result = factorial(5);
console.log(`The factorial of 5 is: ${result}`);

//example2
const number1 = 3; 
const result1 = factorial(number1);
console.log(`The factorial of ${number1} is: ${result1}`);