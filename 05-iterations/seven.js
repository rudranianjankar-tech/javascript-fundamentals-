//map and chaining
//map() is used to modify each element and return a new array.
//map()
 
const myNum = [1,2,3];
const newNum = myNum.map((num)=>{
    return num + 10
})

console.log(newNum);

//chaining
//This is called Chaining because multiple methods are connected one after another.
const newNums = myNum
                .map((num) => num * 10)
                .map((num) => num + 1)
                .filter((num) => num >= 10)

console.log(newNums);