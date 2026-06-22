const name = "anaya";
const likes = "70";

console.log(name + " has " + likes + " likes");//old way of concatenation

console.log(`hello my name is ${name} and I have ${likes} likes`);//template string

const newname = new String("anshita")//Normally, use "anshita" instead of new String(). new String() is mainly used to demonstrate string methods
//string object

console.log(newname[0]);
console.log(newname.length);
console.log(newname.toUpperCase());
console.log(newname.indexOf('i'));
console.log(newname.charAt(5));
console.log(newname.substring(0,4));//negative values are not allowed in substring() method
console.log(newname.slice(-3));//negative values are allowed in slice() method
console.log(newname.trim());//removes whitespace from both ends of a string
console.log(newname.replace("an","van"));
console.log(newname.includes("wp"));
console.log(newname.slice(-3));
console.log(newname.split("-"));//splits a string into an array of substrings based on the specified separator