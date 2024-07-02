function findDuplicates(arr) {
    if (!Array.isArray(arr)) {
      throw new Error("Input must be an array");
    }
   
    const seen = new Set();
    const duplicates = new Set();
   
    for (const item of arr) {
      if (seen.has(item)) {
        duplicates.add(item);
      } else {
        seen.add(item);
      }
    }
   
    return Array.from(duplicates);
  }
   
  // Example usage:
  const array = [1, 2, 3, 4, 5, 3, 2, 6, 7, 8, 8, 9];
  const duplicateValues = findDuplicates(array);
   
  console.log('Duplicate Values = ' + duplicateValues); 