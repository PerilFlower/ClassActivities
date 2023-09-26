let myString = "Hello, World!";
let myNumber = 42;
let myBoolean = true;
let myUndefined;
let myNull = null;

console.log(typeof myString);  // string
console.log(typeof myNumber);  // number
console.log(typeof myBoolean); // boolean
console.log(typeof myUndefined); // undefined
console.log(typeof myNull); // object (typeof null is a historical JavaScript bug, it returns 'object')

let myTemplateLiteral = `The number is ${myNumber} and the boolean is ${myBoolean}.`;
console.log(myTemplateLiteral);

myNull = "Reassigned";
console.log(myNull, typeof myNull); // Should print: Reassigned string

// console.log(unknownVariable); // This line will cause a ReferenceError
console.log(typeof unknownVariable); // This line will not cause a ReferenceError, it will print 'undefined'
