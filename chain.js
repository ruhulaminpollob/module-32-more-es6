const location=[
    {name:'hamid',id:235, age:35,},
    {name:'kamid',id:222, age:30,},
];
console.log(location[1].age);

const whoIsHamid={
    name:'hamid ahmed',
    age:35,
    address:[
        {street:'32/A'},
        {house:'third flour'},
        {side:'right'}
    ]
}

const roomSide=whoIsHamid.address[2].side;
console.log(roomSide);