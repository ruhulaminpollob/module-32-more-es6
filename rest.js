// rest in array

const array=[2,3,5,65,7,3,9];
const [a,b,c,...p]=array;
console.log(p);
console.log(b);
// rest in object
const object={
    name:'pollob',
    age:19,
    work:'web dev',
    hight:5.8,
    wight:65,

}

const {name,work,...r}=object;
console.log(r);
console.log(name,work);