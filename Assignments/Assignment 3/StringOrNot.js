function isString(input){
    return typeof input === 'string'
}

console.log(isString("Hello Shashi"))
console.log(isString(123))
console.log(isString({}))
console.log(isString(new String("Hi")))