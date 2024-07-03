const objPerson = {
    firstName: "John",
    lastName: "Doe",
    language: "EN"
};

let objByValue = {...objPerson};
console.log(' objPerson = ' + JSON.stringify(objPerson));
console.log(' objByValue   = ' + JSON.stringify(objByValue));

let objByRef = objPerson;
console.log(' objPerson = ' + JSON.stringify(objPerson));
console.log(' objByRef  = ' + JSON.stringify(objByRef));
objPerson.firstName = "J";
console.log(' objPerson = ' + JSON.stringify(objPerson));
console.log(' objByValue   = ' + JSON.stringify(objByValue));
console.log(' objByRef  = ' + JSON.stringify(objByRef));


const orgObject = { company: 'ABC Corp' }
const carObject = { carName: 'Ford' }
const employee = Object.assign({}, orgObject, carObject);
console.log(Object.getOwnPropertyNames(employee));
console.log(employee);