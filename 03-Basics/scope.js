//scope define as where can a variable be used 
//global scope- can be used anywhere
//block scope  - can be used inside {}

//global scope
let a = 300;
//Since it's outside any {}, it is global.
//You can use a anywhere.

//block scope - if,for,while,{} etc
if (true) {
    let a = 10;
    const b = 20;
    //console.log("INNER",a);
}
//a = 10 , b= 20 exists only inside the if block
console.log(a);
if (true) {
    var x=10;
}
console.log(x); // x is accessible here because var is function-scoped, not block-scoped


//Because outside the block, 
// JavaScript uses the global a, not the inner one.
//console.log(b);//Because b exists only inside {}.

//function scope - can be used inside function
function myFunction() {
    let c = 50;
    console.log(c);
};
myFunction();


//nested scope - function inside function
function one(){
    const username ="john";
    function two(){
        const password = "123";
        console.log(username);
        console.log(password);
    }
    //console.log(password);
     // password is not accessible here, it exists only inside function two
     //two()
}
one()

if(true){
    const username = "john";
    if(username === "john"){
        const password = "123";
        console.log(username + " " + password);
}
//console.log(password); // password is not accessible here, it exists only inside the inner if block
}

//-------------
//hoisting 

function addone(num){
    return num + 1;
}
addone(5);

const addTwo = function(num){
    return num + 2
}
addTwo(5);

//closure - function inside function can access outer function variables