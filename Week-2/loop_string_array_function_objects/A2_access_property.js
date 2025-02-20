// Assignment 2: Access Nested Object Properties
// Program to retrieve a nested property value from an object using a dot-separated property path. 
// If the property exists, it returns the value; otherwise, it returns null. 
// Uses an iterative approach to traverse the object without functions.

const obj = {
    person: {
      name: "John",
      age: 30,
      address: {
        city: "New York",
        country: "USA"
      }
    }
};



const propertyPath = "person.name";

function accessNestedProperty(obj, propertyPath){
  let current = obj
  // console.log(copy)
    const keys = propertyPath.split('.')
  // console.log(keys)
  
  for(let key of keys){
    // console.log(current[key])
    if(current[key] !== undefined ){
      current = current[key]
      // console.log(current)
    }
    else{
      return null
    }
    
  }
  return current
}


console.log(`
  For - const propertyPath = "person.name";
  ${accessNestedProperty(obj, "person.name")}

  --------------------------------------------

  For - const propertyPath = "person.address.city"
  ${accessNestedProperty(obj, "person.address.city")}

  --------------------------------------------

  For - const propertyPath = "person.contact.email"
  ${accessNestedProperty(obj, "person.contact.email")}
  `)