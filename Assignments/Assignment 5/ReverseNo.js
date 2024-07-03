function reverseNo(num){
 let numstr = num.toString();
 let reversedStr = numstr.split('').reverse().join('')
 let reversedNum = parseInt(reversedStr)

 if(num<0){
    reversedNum = -reversedNum
 }
 return reversedNum
}

console.log(reverseNo(32243))