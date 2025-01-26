//### 1. Double the Numbers in an Array
const num=[1,2,3,4,5]
console.log(num.map(a=> a*2))

//### 2. Convert Strings to Uppercase
//(e.g., ["apple", "banana", "cherry"])
const fruits=["apple", "banana", "cherry"]
console.log(fruits.map(a=>a.toUpperCase()))

//**Objective:** Use the map() function to extract a specific property (e.g., name) from an array of objects.
const person= [{ name: "Alice", age: 25 }, { name: "Bob", age: 30 }]
console.log(person.map(a=>a.name))
