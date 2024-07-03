function getAllCombination(str){
    let combinations = []

    function generateCombination(prefix, str){
        for(let i=0;i<str.length;i++){
            combinations.push(prefix + str[i])
            generateCombination(prefix + str[i],str.slice(i+1))
        }

    }
    generateCombination('', str)
    return combinations;
}

let inputString = "dog";
let result = getAllCombination(inputString)
console.log(result)