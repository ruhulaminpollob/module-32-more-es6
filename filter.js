// filter in array
const numbers=[3,5,7,23,56,78,122,235];
const largeNum=numbers.filter(x=>x>100);
console.log(largeNum);
const tiny=numbers.filter(x=>x<100);
console.log(tiny);


// filter in object in array

const devices=[
    {id:1, item:'mobile', name:'samsung', price:70000},
    {id:2, item:'laptop', name:'asus', price:180000},
    {id:3, item:'watch', name:'samsung', price:30000},
    {id:4, item:'cycle', name:'phoenix', price:15000},
];
const mostValuable=devices.filter(x=>x.price>100000);
const lessValuable=devices.filter(x=>x.price<20000);
console.log(mostValuable);
console.log(lessValuable);
// filter in string array
const friends=['abullea', 'babullea', 'mofijjea','fokijjea'];
const firstLatter=friends.filter(x=>x.length>7);
console.log(firstLatter);