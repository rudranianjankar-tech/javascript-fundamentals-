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
    console.log("INNER",a);
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

function one(){
    const username ="john";
    function two(){
        const password = "123";
        console.log(username);
        console.log(password);
    }
    two();
}

