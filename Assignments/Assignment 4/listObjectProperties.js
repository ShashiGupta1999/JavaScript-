function listObjectProperties(obj){


    const properties = Object.keys(obj)
    properties.forEach(prop => {
        console.log(prop + ": " + obj[prop])
  
    })
   
}

const person = {
    name: "sam",
    age: 24,
    city: "Noida"
}

listObjectProperties(person)