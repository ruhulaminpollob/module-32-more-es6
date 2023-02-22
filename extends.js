

class school{
    name;
    constructor(name){
        this.name=name;
    }
}





class student extends school{
    work = 'study';
    roll;
    goesTo = 'university';

    constructor(name, roll){
        super(name)
        this.roll=roll;
    }
    assignment(time) {
        console.log(
            `I have to submit my assignment within ${time}`
        );
    }
    studyTime(hour) {
        console.log(
            `I have to study at least ${hour} hour`
        );
    }
}





class teacher extends school{
    work='teaching';
    classTime;
    honest=true;
    constructor(name, classTime){
        super(name);
        this.classTime=classTime;
    }

    schedule(time1,time2){
        console.log(
            `${time1} to ${time2}`
        );
    }
}

const pollob=new student('Pollob',5);
console.log(pollob);
pollob.assignment('3rd March')
const kashemSir=new teacher('kashemSir', 10.50);
console.log(kashemSir);

