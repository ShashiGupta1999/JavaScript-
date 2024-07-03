var person = {
    firstName: "John",
    lastName: "Doe",
    language: "EN"
};
console.log(' person = ' + JSON.stringify(person));
person.firstName='J';
person.city = 'Chennai';
console.log(' person = ' + JSON.stringify(person));

Object.freeze(person);
person.firstName='Jason';
person.pincode = 560007;
console.log(' person = ' + JSON.stringify(person));

if (Object.isFrozen(person))
    console.log(' person is Readonly Object');
else
    console.log(' person is updatable ');