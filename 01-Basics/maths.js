const score= 100;
//new number is mainly used to demonstratae number methods. normally we use score = 100 instead of new Number(100)
const scores = new Number(100) //creates number object
let marks = 100676;
console.log(marks.toString())//"100676"
console.log(marks.toString().length)//6
console.log(marks.toFixed(2))//controls the number of digits after the decimal point and returns a string representation of the number
console.log(marks.toPrecision(3))//controls the total number of digits in a number and returns a string representation
console.log(marks.toLocaleString('en-IN'))//indian number system
console.log(marks.toLocaleString('en-US'))//american number system
//Math object
console.log(Math.PI);
console.log(Math.E);
console.log(Math.abs(-54))
console.log(Math.round(567.577))//rounds to the nearest integer
console.log(Math.ceil(54.1))//55
console.log(Math.floor(54.4))//54
console.log(Math.abs(-54))
console.log(Math.min(-5,4,6,1))
console.log(Math.max(-5,4,6,1))
console.log(Math.random())//it never returns 1 but it can return 0. it returns a random number between 0 (inclusive) and 1 (exclusive)
console.log(Math.floor(Math.random()*10)+1)//it returns a random number between 1 and 10 (both inclusive)

const min =10
const max =20
console.log(Math.floor(Math.random()*(max-min+1))+min)





