function getPortionOfArray(arr, startIndex, endIndex) {
    if (!Array.isArray(arr)) {
      throw new Error("Input must be an array");
    }
   
    // Using slice to create a shallow copy of a portion of the array
    return arr.slice(startIndex, endIndex);
  }
   
  // Example 
  const originalArray1 =  [12, 21, 39, 48, 57, 93] ;
  const newArray = getPortionOfArray(originalArray1, 2, 4);
  console.log('Original Array = ' + " " +  originalArray1); 
  console.log('New Array = ' + " " + newArray);
 