const person = {
    firstName: "John",
    lastName: "Doe",
    language: "EN"
};
Object.defineProperty(person,"isBachelor",{
    value:true
});
console.log(' person  = ' + JSON.stringify(person));
console.log(Object.getOwnPropertyDescriptors(person)); 

/* To get the detailed information about the property */
propInfo = Object.getOwnPropertyDescriptor(person,"language");
console.log(' propInfo = ' + JSON.stringify(propInfo));

Object.defineProperty(person,"language",{
    configurable:false
});
propInfo = Object.getOwnPropertyDescriptor(person,"language");
console.log(' propInfo = ' + JSON.stringify(propInfo));
/*
Object.defineProperty(person,"language",{
    enumerable:false
});
propInfo = Object.getOwnPropertyDescriptor(person,"language");
console.log(' propInfo = ' + JSON.stringify(propInfo));
*/
console.log(' Person Information : ' + Object.getOwnPropertyNames(person));
console.log(' Property Info using Keys : ' + Object.keys(person));

/* Would like to print both keys and values associated to the existing object */
console.log(Object.entries(person));

const arr = [
    ["0", "a"],
    ["1", "b"],
    ["2", "c"],
];
/* Converts an Array to an object */
const obj = Object.fromEntries(arr);
console.log(obj);