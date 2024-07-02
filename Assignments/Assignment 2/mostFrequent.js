function mostFrequentItem(arr) {
    if (!Array.isArray(arr)) {
      throw new Error("Input must be an array");
    }
   
    const frequencyMap = {}; //an object to store frequency of each item
    let maxFrequency = 0; // max frequency found so far
    let mostFrequent = null;//item with highest frequency
   
    for (const item of arr) {
      frequencyMap[item] = (frequencyMap[item] || 0) + 1;
      if (frequencyMap[item] > maxFrequency) {
        maxFrequency = frequencyMap[item];
        mostFrequent = item;
      }
    }
   
    return mostFrequent;
  }
   
  // Example
  const array = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];;
  const mostFrequent = mostFrequentItem(array);
   
  console.log('Most Frequent = ' + " " + mostFrequent); 