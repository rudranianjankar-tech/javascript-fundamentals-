//for each()
//is an array method used to execute a function for every element in an array.

/*array.forEach(function(currentValue) {
    // Code
});
Runs once for each element.
Does not return a new array.
Mainly used for printing, updating UI, database operations, etc.*/

const coding = ["js","java","cpp"];

coding.forEach(function(val){
    console.log(val);
});

//using arrow function

coding.forEach((item)=>{
    console.log(item);
}
);


//passing a function reference

function greet(name){
    console.log("hello",name);

}
greet();//function call
console.log(greet);//function reference

function printme(item){
    console.log(item);
}
coding.forEach(printme);
//Because forEach() needs a function reference, not the result of calling the function.

coding.forEach((item, index, arr) => {
    console.log(item, index, arr);
});
//item-current element,index- position,array-orignal array


// array of objects
const code= [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    }
];
code.forEach((item)=>{
    console.log(item.languageName);
});
code.forEach((item) => {
    console.log(item.languageName, item.languageFileName);
});