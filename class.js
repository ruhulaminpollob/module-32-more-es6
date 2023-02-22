// syntactic sugar
class student {
    name;
    work = 'study';
    roll;
    goesTo = 'university';

    constructor(name, roll){
        this.name=name;
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


const pollob = new student('Pollob', 5);
console.log(pollob);
pollob.assignment('3rd March');
pollob.studyTime(4);
