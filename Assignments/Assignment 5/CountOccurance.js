function countLetters(str){

    let lettercount = {};

    for(let char of str){
        if(/[a-z]/.test(char)){
            if(lettercount[char]){
                lettercount[char]++
            }else{
                lettercount[char] = 1;
            }
        }
    }
    return lettercount

}
let inputString = 'Malayalam'
let result = countLetters(inputString)
console.log(result)