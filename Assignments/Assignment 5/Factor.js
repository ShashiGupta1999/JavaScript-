function Factor(num){
    if(num<0){
        console.log("input must bea positive integer")
    }
    let factors = [ ]
    for(let i=0;i<=Math.sqrt(num);i++){
        if(num % i === 0){
            factors.push(i)
            if(i !== num/i){
                factors.push(num/i)
            }
        }
    }
    factors.sort((a,b) => a-b)
    return factors;

}
let number = 36;
let result = Factor(number)
console.log(result)