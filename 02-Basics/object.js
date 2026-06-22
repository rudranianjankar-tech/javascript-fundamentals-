//An object stores data in key-value pairs. The key is a string and the value can be any data type. Objects are used to store data in a structured way.
const person = {
    name: "Anaya",
    age: 20,
    isStudent: true,
    hobbies: ["reading", "traveling", "coding"]
};
console.log(person);
console.log(typeof person);//object is a data type in js

person.name = "Anaya Sharma";//modifying the value of the property "name" of the object person
person["age"] = 21;
//objects are mutable, which means we can change the values of the properties of an object after it has been created. We can also add new properties to an object after it has been created.

//accessing object properties
console.log(person.name);
//method 1: dot notation
console.log(person["age"]);//space is not allowed in dot notation, so we use bracket notation to access the property "age" of the object person
//method 2: bracket notation

//symbols as an object property key
const sym = Symbol("id");
const obj = {
    [sym]: 123
};
console.log(obj[sym]);//always use square brackets to access the property of an object that is a symbol, because dot notation does not work with symbols

Object.freeze(person);//freezes the object person, which means we cannot modify the properties of the object person after it has been frozen
person.name = "Anaya Sharma";//this will not change the value of the property "name" of the object person because it has been frozen
console.log(person.name);

//obj can also store functions as values, which are called methods. Methods are used to perform actions on the object or to return information about the object.

const student = {
    name: "Anaya",
    age: 20,    
};
student.greet = function() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
};
student.greet();
//A function inside an object is called a method.
//this keyword refers to the object that the method is a property of. In this case, this refers to the person object. We can use this to access the properties of the object inside the method.