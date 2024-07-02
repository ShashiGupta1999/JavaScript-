function concatenateString(input,times){
let result = ' '

for(let i=0;i<times;i++){
    result += input
}
return result;
}

console.log(concatenateString("Hi Shashi",3))