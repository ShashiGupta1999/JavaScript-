var ainumber = [10,20,30,40,50]
console.log('ainum = ' + ainumber)

for(var iIndex=0;iIndex<=ainumber;i++)
    console.log(ainumber[iIndex]);

for(let iIndex in ainumber)
    console.log(iIndex);

for(let ivalue of ainumber)
    console.log(ivalue);

var aiMatrix = [[0,1,2,3,4],[3,4,5],[5,6,7]]
console.log(aiMatrix)
console.log( aiMatrix.length + " " + aiMatrix[0].length)

for(var iRow=0;iRow<aiMatrix.length;iRow++){
    for(var iCol=0;iCol<aiMatrix[iRow].length;iCol++)
        console.log(aiMatrix[iRow,iCol])
    console.log(aiMatrix[iRow] [iCol])

}

for(let aiValue of aiMatrix){
    for(let iValue of aiValue)
        console.log(iValue);
}