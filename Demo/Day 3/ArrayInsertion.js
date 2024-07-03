var ainumber = [10,20,30,40,50]
console.log('ainum = ' + ainumber)
ainumber[ainumber.length] = 60
console.log('ainumber = ' + ainumber)
ainumber.push(70)
console.log('ainumber = ' + ainumber)
ainumber.unshift(0)
console.log('ainumber = ' + ainumber)
ainumber.splice(5,0,45)
console.log('ainumber = ' + ainumber)


var aiMatrix = [[1,2,3,4],[4,5,6],[7,8,9]]
console.log('aiMatrix = ' + aiMatrix)
aiMatrix.push(10,11,12)
console.log('aiMatrix = ' + aiMatrix + "No of rows" + " " +  aiMatrix.length)
aiMatrix[0].push(13,14,15)
console.log('aiMatrix = ' + aiMatrix + "No of rows" + " " + aiMatrix.length)
aiMatrix[1].unshift(0)
console.log('aiMatrix = ' + aiMatrix + "No of rows" + " " +  aiMatrix.length)
aiMatrix.splice(5,0,45)
console.log('aiMatrix = ' + aiMatrix)