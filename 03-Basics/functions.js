//function is a block of code that 
//performs a specific task ,and can be reused multiple times in a program. Functions are defined using the function keyword followed by the function name and parentheses. 
// The code to be executed is enclosed in curly braces.

function sayMyName(){
    console.log("Hello, my name is Anaya.");
}
sayMyName();//calling the function to execute the code inside the function

function add(a,b){
    return a+b;//return statement is used to return a value from the function. it also terminates the function execution
}//here a and b are parameters of the function add. Parameters are variables that are used to pass values to a
//variables in the function.
//without return , you cannot store the result of the function in a variable. The return statement is used to return a value from the function. It also terminates the function execution. If there is no return statement, the function will return undefined by default.
console.log(add(5,6));
const result = add(3,5);
//3,5 are arguments of the function add. Arguments are the actual values that are passed to the function when it is called. The number of arguments passed to a function must match the number of parameters defined in the function. If there are more arguments than parameters, the extra arguments will be ignored. If there are fewer arguments than parameters, the missing parameters will be set to undefined.
console.log(result);

function loginmsg(username="Guest"){
    console.log(`Welcome, ${username}!`);
}
loginmsg("Anaya");//passing an argument to the function loginmsg
loginmsg();//if no argument is passed, the default value "Guest" will be used for the parameter username

/*if (!username) {
    console.log("Please enter a username");
    return;
}*/

function calculateCartPrice(val1, val2, ...num1) {
    return num1;
}
console.log(calculateCartPrice(200, 400, 500, 2000,3000));//rest parameter is used to represent an indefinite number of arguments as an array. In this case, num1 will be an array containing the values 500, 2000 and 3000

const user = {
    name: "Sam",
    age: 20
};
function printuser(anyObject){
    console.log(anyObject);
}
printuser(user);

const marks = [80,90,100]

function show(arr){
    console.log(arr);
}
show(marks);
show(marks[0]);//passing a single element of the array as an argument to the function show
