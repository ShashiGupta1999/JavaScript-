function capitalize(input){
    const data = input.split(' ')
    const capitalizedWords = data.map(data => {
       return data.charAt(0).toUpperCase() + data.slice(1).toLowerCase()
    })
    return capitalizedWords.join(' ');

}

console.log(capitalize("HCL TECHNOLOGIES NOIDA SEZ"))
console.log(capitalize("hcl technologies banglore"))