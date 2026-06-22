let value = 3
let negValue = -value
console.log(negValue);

console.log(2+2);
console.log(2-2);
console.log(2*2);
console.log(2**3);
console.log(2/3);
console.log(2%3);

let str1 = "hello"
let str2 = " hitesh"

let str3 = str1 + str2
console.log(str3);

console.log("1" + 2);
console.log(1 + "2");
console.log("1" + 2 + 2);
console.log(1 + 2 + "2");

//console.log( (3 + 4) * 5 % 3);//order of precedence is parentheses, exponentiation, multiplication/division/modulus, addition/subtraction

console.log(+true);//this will give 1 because true is a truthy value
console.log(+false);//this will give 0 because false is a falsy value
console.log(+"");//this will give 0 because empty string is falsy value

let num1, num2, num3

num1 = num2 = num3 = 2 + 2//assignment operator is right associative so it will assign 2+2 to num3 then num3 to num2 and then num2 to num1
console.log(num1, num2, num3);

let gameCounter = 100
//++gameCounter;
console.log(++gameCounter);
let money = 50;
//money++;
console.log(money++);