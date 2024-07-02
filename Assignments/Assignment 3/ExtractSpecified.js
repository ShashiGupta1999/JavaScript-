function extractSpecified(str,end){
    if(typeof str !== 'string'){
        console.log("Input is not a string")
    }
    return str.substring(0, end)

}

console.log(extractSpecified("Hello Shashi" , 4))
