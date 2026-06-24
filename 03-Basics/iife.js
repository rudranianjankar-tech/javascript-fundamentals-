//iife - immediately invoked function expression
//It is a function that is:created
//Executed immediately

//normally we do this
function hello(){
    console.log("hello guys");
}
hello();//called seperately

//--------

(function (){
    console.log("hello");
}
)();

//first () - converts the function into function expression
//second () - calls (invokes) the function immediately

//JavaScript throws an error because a 
// function declaration cannot be invoked immediately like this.

//this is an arrow function iife
((name) => {
    console.log(`DB CONNECTED TWO ${name}`);
})("hitesh");
//immediately called with ("hitesh")

(function start(){
    console.log("Started");
})();

(function(){
    console.log("Started 2");
})();

(() => {
    console.log("Hello");
})();

((name) => {
    console.log(`Hello ${name}`);
})("Hitesh");