function ObjectLength(obj){
    const properties = Object.keys(obj)
    return properties.length;
 
}
const person = {
    name: "sam",
    age: 24,
    city: "Noida"
}
console.log('Object Length = ' ,ObjectLength(person))