const arr = [1,2,3,4,5];
console.log(arr);
console.log(typeof arr);//array is a type of object in js

console.log(arr[0]);//accessing first element of the array
console.log(arr[4]);

//array methods
arr.push(6);    
console.log(arr);

arr.pop();//removes the last element of the array
console.log(arr);   

arr.unshift(0);//adds an element at the beginning of the array
console.log(arr);

arr.shift();//removes the first element of the array
console.log(arr);

console.log(arr.indexOf(3));//returns the index of the first occurrence of the specified element in the array, or -1 if it is not found

console.log(arr.includes(4));//returns true if the array contains the specified element, otherwise false

console.log(arr.length);//returns the number of elements in the array

console.log(arr.reverse());//reverses the order of the elements in the array

console.log(arr.sort());//sorts the elements of the array in place and returns the sorted array. by default it sorts in ascending order

console.log(arr.sort((a,b)=>b-a));//sorts the elements of the array in descending order

console.log(arr.join("-"));//joins all elements of the array into a string and returns the string. the separator is specified as an argument

console.log(arr.slice(1,4));//returns a shallow copy of a portion of an array
//  into a new array object selected from start to end (end not included).
//  the original array will not be modified

console.log(arr.splice(1,2));//removes elements from an array and,
//  if necessary, inserts new elements in their place, 
// returning the deleted elements. the first argument specifies 
// the index at which to start changing the array, and the second argument specifies the number of elements to remove
// start at index 1 and remove 2 elements from the array


//slice vs splice
//slice does not modify the original array, it returns a new array
//splice modifies the original array and returns the removed elements
const arr2 = [1,2,3,4,5];
const newArr = arr2.slice(1,3);//returns a new array with elements from index 1 to 2 (3 is not included)
console.log(newArr);
console.log(arr2);//original array is not modified

const newArr2 = arr2.splice(1,3);//removes elements from index 1 to 3 (4 is not included) and returns the removed elements
console.log(newArr2);
console.log(arr2);//original array is modified




