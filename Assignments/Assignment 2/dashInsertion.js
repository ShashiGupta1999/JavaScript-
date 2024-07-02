function insertDashBetweenEvens(number) {
    if (typeof number !== 'number' || number < 0) {
      throw new Error("Input must be a non-negative number");
    }
   
    const numStr = number.toString();
    let result = '';
   
    for (let i = 0; i < numStr.length; i++) {
      result += numStr[i];
      if (numStr[i] % 2 === 0 && numStr[i + 1] % 2 === 0) {
        result += '-';
      }
    }
   
    return result;
  }
   
  // Example 
  const inputNumber = 2386294;
  const output = insertDashBetweenEvens(inputNumber);
   
  console.log(output); 