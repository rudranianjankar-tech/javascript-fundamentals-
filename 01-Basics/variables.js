"use strict";//this will help us to write better code by giving error for undeclared variables and other issues

const name ="anaya";
let age = 18;//recommended for values that can change
var pass = 1234;//older way of declaring variables, not recommended

age = 19;
pass= 12345;
// name = "ashish" //this will give error because name is constant 
console.log(name);
console.log(age);
console.log(pass);
/* let is good over var */

/*
Prefer not to use var
because of issue in block scope and functional scope
*/


console.table([name , age, pass]);
