function abbreviatedForm(input){
    const words = input.split(' ');
    const abbreviation = words.map(word => word .charAt(0).toUpperCase()).join('');
    return abbreviation;

}

console.log(abbreviatedForm("hyper text markup language"))
console.log(abbreviatedForm("European Computer Manufacturers Association"))