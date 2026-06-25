//for of loop and map

//for...of is used to iterate over iterable objects like:
/*Arrays ([]) 
Strings ("") 
Maps (Map) 
Sets (Set) */

//for (const variable of iterable) {
    // Code}


//variable → Current value
//iterable → Array, String, Map, Set, etc.

//array
const arr = [1,2,3,4];
for (const num of arr){
    console.log(num);
}
//string
const hello = "hello world";
for (const hi of hello){
    console.log(hi);
}

//map 
//map stores data as key value pairs
const map = new Map();
map.set('IN', "India");
map.set('USA', "United States of America");
map.set('Fr', "France");
map.set('IN', "India");
//Duplicate keys are NOT allowed.
//Only one 'IN' will be stored.

//Maps store unique keys and maintain insertion order.

//looping through a map
for(const [key,value]of map){
    console.log(key ,"-",value);
}
//const [key, value] = ["IN", "India"];

//for of doesnt work on object because 
//Objects ({}) are not iterable by default

//loop through object
const myObject = {
    game1: "NFS",
    game2: "Spiderman"
};

for (const [key, value] of Object.entries(myObject)) {
    console.log(key, ":-", value);
}

/*| `for...of`                           | `for...in`                 |
| ------------------------------------ | -------------------------- |
| Gives values                         | Gives keys/indexes         |
| Used for Arrays, Strings, Maps, Sets | Used mainly for Objects    |
| Works on iterable objects            | Works on object properties |
*/

//for...of  → VALUES
/*for...in  → KEYS
Map       → Unique keys
Object    → Use Object.entries()*/