//1.if-used only when a condition is true
const temp= 41;
if(temp>40){
    console.log("its so hot");
}

//2.if else - Used when you have two possible outcomes.
if (temp === 40) {
    console.log("Temperature is 40");
} else {
    console.log("Temperature is not 40");
}

//3.comparison operator
//Always prefer === and !== because they compare both value and data type.

//4.Block scope
//Variables declared with let and const exist only inside the block {}.
let score = 99;
if (score > 100) {
    let power = "fly";
    console.log(power);
}

//console.log(power); // Error

//5. one-line if 
//you can write a single statement without {}
let balance = 600;
if (balance > 500) console.log("test");
//----------------

//6.else if
//used when checking multiple condition
//JavaScript checks conditions from top to bottom.

//As soon as one condition is true, it executes that block and skips the rest.

if (balance < 500) {
    console.log("Less than 500");
}
else if (balance < 750) {
    console.log("Less than 750");
}
else if (balance < 900) {
    console.log("Less than 900");
}
else {
    console.log("1200 or more");
}

//----------------

//7.logical and &&
//&&- all conditions must be true
//if (userLoggedIn && debitCard && 2 == 3) {
   // console.log("Allow to buy course");}

//8.logical or ||
//|| means at least one condition must be true.
//if (loggedInFromGoogle || loggedInFromEmail) {
  //  console.log("User logged in");}

