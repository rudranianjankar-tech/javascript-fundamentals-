//type conversion
//three built-in functions to convert data types
//1. Number()
//2. String()
//3. Boolean()

//1.Number() function will convert a value to number
let score = "hitesh"
let valueInNumber = Number(score)
console.log(typeof valueInNumber);//this will give number but it is not a valid number so it will give NaN
console.log(valueInNumber);

//number() function will convert string to number if it is a valid number otherwise it will return NaN
let scores = "9";
let scoreInNumber = Number(scores);
console.log(scoreInNumber);

console.log(typeof NaN);//NaN is a number type but it is not a valid number

console.log(Number(true));
//js will convert true to 1 and false to 0
console.log(Number(false));
console.log(Number(null));//0
console.log(Number(""));//0
console.log(Number(undefined));//NaN


//2.boolean() function will convert a value to boolean
console.log(Boolean(1));//true
console.log(Boolean(0));//false

let isLoggedIn = "idk";
console.log(Boolean(isLoggedIn));//true because it is a non-empty string
console.log(Boolean(""));//false because it is an empty string
console.log(Boolean(null));//false
console.log(Boolean(undefined));//false
console.log(Boolean(NaN));//false   
console.log(Boolean({}));//true because it is an object
console.log(Boolean([]));//true because it is an array


//3.String() function will convert a value to string
let score1 = 1234;
let str = String(score1);
console.log(str);
console.log(typeof str);

console.log(String(true));
console.log(String(false));
console.log(String(null));
console.log(String(undefined));
console.log(String(NaN));   

let name = "anaya";
console.log(`hello ${name}`);

//string concatenation
let str1 = "hello";
let str2 = "world";
console.log(str1 + " " + str2);

//const newname = new String('hmmmm-wp')//zstring object
/*console.log(newname[0]);
console.log(newname.length);
console.log(newname.toUpperCase());
console.log(newname.indexOf('m'));
console.log(newname.substring(0,4));
console.log(newname.slice(-3));
console.log(newname.trim());
console.log(newname.replace("wp","wassup"));
console.log(newname.includes("wp"));
console.log(newname.slice(-3));
console.log(newname.split("-"));*/