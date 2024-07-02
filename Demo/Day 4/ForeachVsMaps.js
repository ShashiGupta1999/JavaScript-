const myArray = [1,2,3,4,5]
myArray.forEach(myArray => (console.log(myArray)))

myArray.map((value, index) =>{
    console.log(('index = ' + index + " " + 'value = ' + value))
})
/* Return type */
console.log(myArray.forEach(x => x * x));
console.log(myArray.map(x => x * x));

/* Streaming of Operations */
console.log(myArray.map(x => x * x).reduce((total, value) => total + value));
                                             /* let total = 0
                                                total = total + value */