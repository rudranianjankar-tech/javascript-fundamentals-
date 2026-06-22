//7 data types in JavaScript
//primitive data types

//1. String
let name = "Anaya";
console.log(name);
console.log(typeof name);

//2. Number
let age = 18;
console.log(age);
console.log(typeof age);

//3. Boolean
let isStudent = true;
console.log(isStudent);
console.log(typeof isStudent);

//4. Null
let emptyValue = null;
console.log(emptyValue);
console.log(typeof emptyValue);

//5. Undefined
let undefinedValue;
console.log(undefinedValue);
console.log(typeof undefinedValue);

//6. Symbol
let id = Symbol("123");
console.log(id);
console.log(typeof id);

//7.bigint
let bigIntValue = 1234567890123456789012345678901234567890n;
console.log(bigIntValue);
console.log(typeof bigIntValue);



let state;//here type is undefined
let temp = null; 

//symbol creates unique value
let id1 = Symbol("123")
let id2 = Symbol("123")
console.log(id1 === id2);

console.log(typeof id1);

//non-primitive data type

//1. Object
let student = {
    name: "ashi",
    age:19
}
console.log(student);
console.log(typeof student);

//2. Array
let numbers = [1,2,3,4,5];
console.log(numbers);
console.log(typeof numbers);
//arrays are also objects in JavaScript, they have some special properties and methods to work with them

//3. Function
function greet(){
    console.log("Hello, welcome to JavaScript!");
}   
//functions are also objects in JavaScript, they can have properties and methods
console.log(greet);
console.log(typeof greet);

console.log(3 
    +
     3) // code readability should be high

