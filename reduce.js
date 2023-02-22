// reduce sum from array

const numbers=[3,5,7,23,55];
const sum=numbers.reduce((previous,current)=>previous+current,0);
console.log(sum);

//reduce multiply 
const multiply=numbers.reduce((previous,current)=>previous*current,1);
console.log(multiply);

// reduce multiline
const multiLineSum=numbers.reduce((previous,current)=>{
    const sum=previous+current;
    return sum;
},0);
console.log(multiLineSum);