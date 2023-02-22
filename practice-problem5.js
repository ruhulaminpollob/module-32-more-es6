/*
Q. 
let data = {
    location:[
        {
            latitude:'34.5 , 37.8',
            longitude: '98.77 , 58,7',
            city: 'Hyderabad',
            country:'India',
        }
    ]
}

console the value of city

*/

let data = {
    location:[
        {
            latitude:'34.5 , 37.8',
            longitude: '98.77 , 58,7',
            city: 'Hyderabad',
            country:'India',
        }
    ]
}

const city=data.location[0].city;
console.log(city);