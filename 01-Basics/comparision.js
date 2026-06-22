console.log(2 > 1);
console.log(2 >= 1);
console.log(2 < 1);
console.log(2 == 1);
console.log(2 != 1);


console.log("2" > 1);//js will convert string to number and then compare
console.log("02" > 1);//js will convert string to number and then compare
console.log("2" > "12");//js will compare string lexicographically
//here both values are string so js will compare them lexicographically and "2" is greater than "1" so it will return true

console.log(null > 0);//false because null is converted to 0 and 0 is not greater than 0
console.log(null < 0);//false because null is converted to 0 and 0 is not less than 0
console.log(null == 0);//js does not convert null to 0 for equality comparison so it will return false
console.log(null >= 0);//true because null is converted to 0 and 0 is equal to 0

console.log(undefined == 0);//false because js does not convert undefined to 0 for equality comparison
console.log(undefined >= 0);//false because undefined is converted to NaN and NaN is not greater than or equal to 0
console.log(undefined <= 0);//false because undefined is converted to NaN and NaN is not less than or equal to 0    
console.log(undefined > 0);//false because undefined is converted to NaN and NaN is not greater than 0
console.log(undefined < 0);//false because undefined is converted to NaN and NaN is not less than 0

console.log("2"==2);
// === 

console.log("2" === 2); //strict equality operator checks for both value and type