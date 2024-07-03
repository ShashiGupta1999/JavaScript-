function secondLowestGreatestNo(arr){
    let uniqueSortedArr = [...new Set(arr)].sort((a,b) => a-b)
    if(uniqueSortedArr <2 ){
        return null;
    }
    let secondLowest = uniqueSortedArr[1]
    let secondGreatest = uniqueSortedArr[uniqueSortedArr.length - 2]

    return{
        secondLowest :  secondLowest,
        secondGreatest : secondGreatest
    }
}
let numbers = [1,2,3,4,5]
let result = secondLowestGreatestNo(numbers)
console.log(result)