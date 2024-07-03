var person = {
  firstName : "John",
  lastName  : "Doe",
  age       : 50,
  eyeColor  : "blue",
  printMethod : function() {
    console.log(' Within printMethod() ');
  }
};
console.log (person);
console.log(' Person = ' + person);
console.log(' Person = ' + JSON.stringify(person));
person.printMethod();

var objObject = new Object();
objObject.iEno = 12;
objObject.sEmpName = "Magesh";
objObject.sLocation = "Chennai";
objObject.dispMethod = function(){
  console.log(' within dispMethod() ');
}
console.log(' objObject  = ' + JSON.stringify(objObject));
objObject.dispMethod();

function Book() {
  this.Name = "C";
  this.Author = "Balaguru Swamy";
  this.Publisher = "Tata Mc.Graw";

  /* To Create a Member Function */
  this.display = function () {
      console.log("\n Inside Function  Display");
  }
}
var objBook = new Book();
console.log(' objBook  = ' + JSON.stringify(objBook));
console.log(' this.Name = ' + objBook.Name);
console.log(' this.Author = ' + objBook['Author']);

let objObjectCreate = Object.create(null);
console.log(' objObjectCreate = ' + JSON.stringify(objObjectCreate));
/*
let objObjectCreation = Object.create(objObjectCreate,{
  iNumber:{
    value:12
  },
  sName:{
    value:'Kiran',
    enumerable:true
  }
});
*/

let objObjectCreation = Object.create(Object.prototype,{
  iNumber:{
    value:12
  },
  sName:{
    value:'Kiran',
    enumerable:true
  }
});
console.log(' objObjectCreation = ' + JSON.stringify(objObjectCreation));
console.log(' objObjectCreation.iNumber  = '  + objObjectCreation.iNumber);

/* From ES6 */
class Person {
  dispMethod(){
    console.log(' Witihn dispMehthod() in class Person ')
  }
}

const objPerson = new Person();
objPerson.dispMethod();

const orgObject = { company: 'HCL Technologies' };
const employee = Object.create(orgObject, { bu: { value: 'ERS-STAR Academy' } });
console.log(' employee = ' + JSON.stringify(employee));
console.log(employee.company + " " + employee.bu);