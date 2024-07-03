function AlphabaticalOrder(str){
    let letters = str.split('')
    letters.sort();
    
    let sortedString = letters.join('')

    return sortedString;

}
let inputString = 'webmaster'
let sortedString = AlphabaticalOrder(inputString)
console.log(sortedString)