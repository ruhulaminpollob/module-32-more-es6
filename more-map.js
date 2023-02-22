// map in array
const numbers=[3,5,3,7,9];
const divide=numbers.map(d=>d/2);
console.log(divide);
const multiply=numbers.map(m=>m*2);
console.log(multiply);
// map in object inner array
const phones=[
    {id:1, item:'mobile', name:'samsung', price:70000},
    {id:1, item:'laptop', name:'asus', price:180000},
    {id:1, item:'watch', name:'samsung', price:30000},
    {id:1, item:'cycle', name:'phoenix', price:15000},
]

const name=phones.map(phone=>phone.name);
console.log(name);
const price=phones.map(p=>p.price)
console.log(price);
const tax=price.map(t=>t/7);
console.log(tax);