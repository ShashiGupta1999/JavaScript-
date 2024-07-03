function changeArrayContent(aiArr){
    for(let iIndex=0;iIndex<aiArr.length;iIndex++)
        aiArr[iIndex] = aiArr[iIndex] * 10;
}

let aiNo = [1,2,3,4,5,6];
console.log(' Before Function call aiNo = ' + aiNo);
changeArrayContent(aiNo);
console.log(' After Function call aiNo = ' + aiNo);