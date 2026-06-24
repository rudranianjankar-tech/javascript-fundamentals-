const user = {
    username: "anaya",
    price: 999,

    welcomemessage: function(){
        console.log(`${this.username},welcome here`)
        //console.log(this);
    }
}
//user.welcomemessage()
//user.username="sam"
//user.welcomemessage()

//console.log(this);//{}
// this refers to the current object.
//It is mainly used inside object methods to access that object's properties.


/*function hi (){
    let username = "hmm";
    console.log(this.usernamwe);//undefined
}

hi()*/

//arrow function ()=> {}
const hello = () => {
    let user = "hello";
}


//const addtwo = (num1,num2) => {
   // return num1 + num2
//}

//implicitive 
const addtwo = (num1,num2) =>(num1 + num2)

console.log(addtwo(3,4))

const arr = [2,5,3,6,5];
arr.forEach((value) => {
    console.log(value);
});