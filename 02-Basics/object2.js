const tinderUser = {}
//creates an empty object called tinderUser
const tinderUser2 = new Object();
//creates an empty object called tinderUser2 using the object constructor
//both of the above methods create an empty object, but the first method is more commonly used and is considered to be more concise and easier to read. The second method is less commonly used and is generally not recommended unless you need to create an object with a specific prototype or if you want to use the object constructor for some reason.
tinderUser.id = "12345";
tinderUser.name = "Anaya";
tinderUser.isLoggedIn = false;
//nesting objects
//objects can also contain other objects as values, which is called nesting. This allows us to create more complex data structures and to organize our data in a more structured way.

const Users = [
    {
        id: "12345",
        name: "Anaya",
        isLoggedIn: false
    },
    {
        id: "67890",
        name: "Rohit",
        isLoggedIn: true
    }
];
console.log(Users);
console.log(Users[1].name);//accessing the name of the second user using dot notation
console.log(Object.keys(Users[0]));
console.log(Object.values(Users[0]));
console.log(Object.entries(Users[0]));
//Object.entries() method returns an array of a given object's own enumerable string-keyed property [key, value] pairs, in the same order as that provided by a for...in loop. in this case it returns an array of the key-value pairs of the first user in the Users array which are [["id", "12345"], ["name", "Anaya"], ["isLoggedIn", false]]
console.log(Users[0].hasOwnProperty("name"));//hasOwnProperty() method returns a boolean indicating whether the object has the specified property as its own property (as opposed to inheriting it). in this case it returns true because the first user in the Users array has the property "name" as its own property

const regularUser = {
    email:"anaya@example.com",
    fullname: {
        userfullname:{
            firstname:"Anaya",
            lastname:"Sharma"
        }
    }
};
console.log(regularUser.fullname.userfullname.firstname);//accessing the first name of the regular user using dot notation
console.log(regularUser["fullname"]["userfullname"]["lastname"]);//accessing the last name of the regular user using bracket notation

const obj1 = { 1:"a", 2:"b", 3:"c" };
const obj2 = { 4:"d", 5:"e", 6:"f" };
const obj3 = Object.assign({}, obj1, obj2);//Object.assign() method is used to copy the values of all enumerable own properties from one or more source objects to a target object. in this case it creates a new object by copying the properties of obj1 and obj2 into an empty object {}
console.log(obj3);

const newobj={...obj1,...obj2};//spread operator is used to spread the properties of obj1 and obj2 into a new object called newobj
console.log(newobj);//modern way to merge objects using spread operator

//Object destructuring
//Object destructuring is a syntax that allows us to unpack values from objects into distinct variables. This can make our code more concise and easier to read.

const course = {
    courseName: "JavaScript",
    price: 999,
    instructor: "Anaya"
};
//using destructuring
const { courseName: course, price, instructor } = course;
console.log(course, price, instructor);//renaming the variable courseName to cpp while destructuring
//without destructuring
const courseName1 = course.courseName;
const price1 = course.price;
const instructor1 = course.instructor;
console.log(courseName1, price1, instructor1);

//json
//JSON (JavaScript Object Notation) is a lightweight data-interchange format that is easy for humans to read and write, and easy for machines to parse and generate. It is often used to transmit data between a server and a web application as an alternative to XML.
//{
   // "name": "Anaya"
//}
//json is mainly used for sending and receiving data between a server and an application

[
    {},
    {},
    {}
]
//json can also be used to represent an array of objects, which is a common data structure for representing collections of data in web applications.
