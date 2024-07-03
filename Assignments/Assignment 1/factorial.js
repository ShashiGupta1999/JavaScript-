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
 
// Example1 
const number = 5; 
const result = factorial(number);
console.log(`The factorial of ${number} is: ${result}`);

//example2
const number1 = 15; 
const result1 = factorial(number1);
console.log(`The factorial of ${number1} is: ${result1}`);