//reduce()
//reduce() is used to combine all array elements into a single value
/*Examples:
Sum of numbers 
Total shopping cart price 
Average, maximum, minimum */

/*array.reduce((acc,curr)=>{
    return updatedvalue;
},0)*/

//sum of num

const num=[1,2,3,4];
const total = num.reduce((acc,curr)=>acc+curr,0);
console.log(total);

//shopping cart total

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]


const price = shoppingCart.reduce((acc,item)=>acc+item.price,0);
console.log(price);

/*Important Points

reduce() returns one final value.

acc stores the running result.

curr (or item) is the current element.

The second argument (0) is the initial value of acc.*/