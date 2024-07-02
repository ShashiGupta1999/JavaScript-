function lowerToUpperAndVV(input){
    let swapped = ' ';

    for(let i =0;i<input.length;i++){
        const char = input[i]

        if(char === char.toUpperCase()){
            swapped = swapped + char.toLowerCase()

        }else{
            swapped = swapped + char.toUpperCase()
 
        }
    }
    return swapped;

}

console.log(lowerToUpperAndVV("ersSTARaCADEmy"))
console.log(lowerToUpperAndVV("sHasHIGupTa"))