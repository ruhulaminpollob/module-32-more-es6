// find in array
const numbers=[3,5,7,23,55,78,122,235];

const fives=numbers.find(num=>num % 5===0);
console.log(fives);
const fivesAll=numbers.filter(num=> num % 5 ===0);
console.log(fivesAll);

// find in object in array
const devices=[
    {id:1, item:'mobile', name:'samsung', price:70000},
    {id:2, item:'laptop', name:'asus', price:180000},
    {id:3, item:'watch', name:'samsung', price:30000},
    {id:4, item:'cycle', name:'phoenix', price:15000},
];
const cheap=devices.find(x=>x.price<40000);
console.log(cheap);
const cheapAll=devices.filter(x=>x.price<40000);
console.log(cheapAll);
