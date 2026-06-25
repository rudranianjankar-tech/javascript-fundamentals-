//while loop
//runs as long as the condition is true
let i=0;

while(i<=10){
    console.log(`values are ${i}`);
    i=i+2;
}
//Checks the condition before executing.
//May run 0 times.
//imp rule - always update the loop variable 
let x = 0;

while (x <= 10) {
    console.log(x);
    x++;
}
//this creates an infinite loop bcoz x never changes

let myArray = ['flash', 'batman', 'superman'];

let arr = 0;

while (arr < myArray.length) {
    console.log(myArray[arr]);
    arr++;
}
//---------------------------

//do while loop
//A do...while loop executes the code at least once, even if the condition is false.

let score=11;

do{
    console.log(`score is ${score}`);
    score++;
}while(score<=10);
//Executes the code first.
//Checks the condition after execution.
//Runs at least once.