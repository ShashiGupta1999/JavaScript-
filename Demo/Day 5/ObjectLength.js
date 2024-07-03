var objStudent = {
    name: "Magesh",
    sclass: "12th",
    rollno: 21
};
let propertyCount = 0;
for (key in objStudent) {
    if (objStudent.hasOwnProperty(key))
        propertyCount++;
}
console.log(' Number of Properties  = ' + propertyCount);