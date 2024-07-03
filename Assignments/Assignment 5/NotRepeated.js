function NotRepeated(str){
    let charCount = {}

    for(let char of str){
       
            if(charCount[char]){
                charCount[char]++
            }else{
                charCount[char] = 1;
               // console.log(charCount[char])
            }
        }
        for(let char of str){
            if(charCount[char] === 1){
                return char;
               
            }
        }
        return null;
    }
       
    
    let inputString = "abcaddbec"
    let result = NotRepeated(inputString)
    console.log(result)