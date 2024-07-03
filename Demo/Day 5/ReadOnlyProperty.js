const person = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue",
    printMethod: function () {
        console.log(' Within printMethod() ');
    }
};
console.log(' Person = ' + JSON.stringify(person));
person.age = 51;
console.log(' Person = ' + JSON.stringify(person));

Object.defineProperty(person,"age",{
    writable:false
});
person.age = 54;
console.log(' Person = ' + JSON.stringify(person));
