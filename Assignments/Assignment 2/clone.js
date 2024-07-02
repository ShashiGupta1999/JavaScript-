function cloneArray(arr) {
    if (!Array.isArray(arr)) {
      throw new Error("Argument must be an array");
    }
   
    return arr.slice();
  }
   
  // Example 
  const originalArray = [1, 2, 3, 4, 5];
  const clonedArray = cloneArray(originalArray);
   
  console.log('Clone Array' + " " + clonedArray);
  console.log('Original Array' + " " + originalArray);
  console.log(originalArray === clonedArray);