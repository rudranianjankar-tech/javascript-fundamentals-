//In JavaScript, every value is treated as 
// either truthy or falsy when used in a condition.

//an empty array ([]) is a truthy value.

const userEmail = [];

if (userEmail) {
    console.log("Got user email");
} else {
    console.log("Don't have user email");
}
//JavaScript only checks whether the value is truthy or falsy—not whether the array has elements.

//falsy values
/*
| Value       | Description           |
| ----------- | --------------------- |
| `false`     | Boolean false         |
| `0`         | Zero                  |
| `-0`        | Negative zero         |
| `0n`        | BigInt zero           |
| `""`        | Empty string          |
| `null`      | No value              |
| `undefined` | Variable not assigned |
| `NaN`       | Not a Number          |
this values makes an if condition evalutes to false
*/

//truthy values

/*| Value          | Truthy? |
| -------------- | ------- |
| `"0"`          | ✅ Yes   |
| `"false"`      | ✅ Yes   |
| `" "` (space)  | ✅ Yes   |
| `[]`           | ✅ Yes   |
| `{}`           | ✅ Yes   |
| `function(){}` | ✅ Yes   |
*/

const usersEmail = [];

if (usersEmail.length === 0) {
    console.log("Array is empty");
}

//object dont have length property

const emptyObj = {};

if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty");
}

//-----------------------------------

//Nullish coalescing operator ??

//value1 ?? value2
//it returns the first value that is not null or undefined

let val1 = 5 ?? 10
let val2 = null??10;
let val3 = undefined ?? 15;
let vaal = 0??15;
console.log(vaal);
let wall = 0||15;
console.log(wall);
let val4 = null ?? 10 ?? 20;
console.log(val4);
//JavaScript checks from left to right:
//null → ignore
//10 → first valid value

//------------------
//ternary operator 
//short way to write if else
    //condition ? expressionIfTrue : expressionIfFalse;
const iceTeaPrice = 100;

iceTeaPrice <= 80
    ? console.log("Less than 80")
    : console.log("More than 80");