function transformElement(element) {
    return element + 2; 
  }
   
  function processArray(arr) {
    return arr.map(transformElement);
  }

  const parentArray = [1, 2, 3, 4, 5];
  const processedArray = processArray(parentArray);
  console.log('Parent Array = ' + parentArray); 
  console.log('Process Array = ' +  processedArray); 