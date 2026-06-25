// for in
//for (const key in object) {
    // Code
//}

//objects

const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: 'ruby',
    swift: 'swift by apple'
};

for (const key in myObject) {
    console.log(`${key} shortcut is for ${myObject[key]}`);
}
//Important
//Use square brackets [], not dot notation

//array
const programming = ["js", "rb", "py", "java", "cpp"];

for (const key in programming) {
    console.log(key);
}
//Because for...in returns indexes (keys) of the array

//to get values

for(const key in programming){
    console.log(programming[key]);
}

/*Map is not a normal JavaScript object.

for...in works with object properties
Map stores data internally and is iterable, not enumerable

So, use for...of with Maps*/

//for...in  → KEYS (Objects, Array Indexes)

//for...of  → VALUES (Arrays, Strings, Maps, Sets)