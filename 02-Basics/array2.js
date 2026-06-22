const number =[1,2];
const string = ["hello","world"];
number.push(string);
console.log(number);
console.log(number[2][0]);//accessing the first element of the string array which is at index 2 of the number array

const boolean = [true,false];
const mix= boolean.concat(string);
console.log(mix);

const mixed = [...boolean,...string];//spread operator is used to spread the elements of the boolean and string arrays into a new array called mixed
console.log(mixed);//modern way to concatenate arrays using spread operator

console.log(number.flat(Infinity));//flattens the array to a specified depth. Infinity means it will flatten all nested arrays  
console.log(Array.isArray([1,2]));//checks if the element at index 2 of the number array is an array or not. it returns true because it is an array
console.log(Array.from("Hello"));//Array.from() method creates a new, shallow-copied Array instance from an array-like or iterable object. in this case it creates an array from the string "Hello" which is ["H","e","l","l","o"]
console.log(Array.from({name:"Anaya"}));//Array.from() method creates a new, shallow-copied Array instance from an array-like or iterable object. in this case it creates an array from the string "Hello" and an array from the object {name:"Anaya"} which is empty because it is not an array-like or iterable object
const obj = { name: "Anaya", age: 20 };
console.log(Object.keys(obj));//Object.keys() method returns an array of a given object's own enumerable property names, iterated in the same order that a normal loop would. in this case it returns an array of the keys of the object obj which are "name" and "age"
console.log(Object.values(obj));//Object.values() method returns an array of a given object's own enumerable property values, in the same order as that provided by a for...in loop. in this case it returns an array of the values of the object obj which are "Anaya" and 20

let score1=100;
let score2=200;
let score3=300;
console.log(Array.of(score1,score2,score3));//Array.of() method creates a new Array instance with a variable number of arguments, regardless of number or type of the arguments. in this case it creates an array with the values of score1, score2 and score3 which are 100, 200 and 300 respectively