const numbers = [2, 4, 5, 6, 7, 9];

// make numbers double using for loop
const double1 = [];
for (const number of numbers) {
    double1.push(number * 2);
}
// console.log(double1);

// make numbers of array double using functions

function double2(num) {
    const double1 = [];
    for (const number of numbers) {
        double1.push(double3(number));
    }
    return double1;
}
const double3=num=>num*2;
console.log(double2(numbers));

// make numbers of array double using map

const double4=numbers.map(double3);
console.log(double4);

const triple=[5,6,2,5,9].map(x=>x*3);
console.log(triple);