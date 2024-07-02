function getFirstElements(arr, n) {
    if (!Array.isArray(arr)) {
      throw new Error("First argument must be an array");
    }
   
    if (typeof n !== 'number' || n < 0) {
      throw new Error("Second argument must be a non-negative number");
    }
   
    return arr.slice(0, n);
  }
   
  // Example 
  const array = [1, 2, 3, 4, 5];
  console.log(getFirstElements(array));    
  console.log(getFirstElements(array, 3)); 
  console.log(' Array[0] = ' + " " + array[0]);