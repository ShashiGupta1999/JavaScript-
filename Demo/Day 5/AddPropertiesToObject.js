var person = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue",
    printMethod: function () {
        console.log(' Within printMethod() ');
    }
};
person.residesAt = "Bangalore";
//person['resiesAt'] = "Bangalore";
console.log(' person  = ' + JSON.stringify(person));

/* To add property to an existing object using 2 pre-defined static methods
    within Object class 
            defineProperty()    : Good practice, iff we would like to append a single property
                 |-> Control Transfers = number of properties * 2
            defineProperties()   : Good Practice, provided if we would like to append multiple properties to the object
                 |-> Control Transfers = 2 (ie. irrespecitve of number of properties we append)
*/
Object.defineProperty(person,"pincode",{
    value:560018,
    enumerable:true
});
console.log(' person  = ' + JSON.stringify(person));

var objObject = new Object();
objObject.iEno = 12;
objObject.sEmpName = "Magesh";
objObject.sLocation = "Chennai";
objObject.dispMethod = function(){
  console.log(' within dispMethod() ');
}
Object.defineProperties(objObject, {
    iAge:{
      value:48,
      enumerable:true
    },
    isBachelor:{
        value:false
    },
    skillSet:{
        value:'Java, .Net, UI',
        enumerable:true
    }
});
console.log(' objObject  = ' + JSON.stringify(objObject));

function Book() {
    this.Name = "C";
    this.Author = "Balaguru Swamy";
    this.Publisher = "Tata Mc.Graw";

    /* To Create a Member Function */
    this.display = function () {
        document.write("\n Inside Function  Display");
    }
}
/* To Create a Datamember outside the class */
Book.prototype.Year = 12;
/* To Create an User defined Object */
var objBook = new Book();
objBook.remarks = "Good for beginners";
var objBooks = new Book();

console.log(' objBook = ' + JSON.stringify(objBook) + objBook.Year);
console.log(' objBooks = ' + JSON.stringify(objBooks) + "Year = " + objBooks.Year);

Object.defineProperty(objBooks, "Remarks", {value : "Excellent Book",
    writable : true,
    enumerable : true,
    configurable : true});
console.log(' objBooks = ' + JSON.stringify(objBooks));

const objCreate = {};
Object.defineProperties(objCreate, {
    property1: {
        value: true,
        writable: true,
        enumerable: true
    },
    property2: {
        value: "Hello",
        writable: false,
        enumerable: true
    }
});
console.log(' objCreate = ' + JSON.stringify(objCreate));