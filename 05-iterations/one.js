//for loop 
//A for loop is used to repeat a block of code a specific number of times.
for(let i=0 ; i<=10 ;i++){
    console.log(i);
}
//console.log(i);//error as variable scope it only exists inside the loop

//using if
for(let i=0;i<=10;i++){
    if(i==5){
        console.log("5 is a cutie no.");
        break;//imdediately stops thr loop
    }
    console.log(i);
}

//nested for loop 
//loop inside another loop
for(i=0;i<3;i++){
    for(j=0;j<=3;j++){
        console.log(i,j);
    }
}
//for every one iteration of the outer loop,inner loop runs completely

//multipication table

for (let i=1;i<=10;i++){
    for(let j=1;j<=10;j++){
        console.log(i+"*"+j+"="+i*j);
    }
}
//nested loops are commonly used for -multipication table,matrix operation,patterns,2d arrays

//loop through an array

let arr = [1,2,3];
for(let i=0;i<arr.length;i++){
    console.log(arr[i]);
}

for (let i = 1; i <= 7; i++) {
    if (i == 5) {
        console.log("Detected 5");
        continue;
    }

    console.log(i);
}//continue skips the current iteration and moves to the next one.

/*| `break`                          | `continue`                                 |
| -------------------------------- | ------------------------------------------ |
| Stops the loop completely        | Skips only the current iteration           |
| Control moves outside the loop   | Control goes to the next iteration         |
| Used when you want to exit early | Used when you want to ignore one iteration |
// */