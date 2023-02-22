// Practice Problem reduce()


/*
Q. You have an array [ 1, 9, 17, 22 ]. Add the all elements
of this array and give output. Do this using for loop &
array.reduce() method.
*/
const numbers=[ 1, 9, 17, 22 ];
const sumReduce=numbers.reduce((y,x)=> y+x,0);
console.log(sumReduce);

let sum=0;
for (const num of numbers) {
    sum+=num;
}

console.log(sum);