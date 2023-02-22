
const student={
    name:'solimullah',
    class:10,
    marks:{
        math:88,
        physics:92,
        chemistry:72,
    }
}

const name=student.name;
console.log(name);
const mathMarks=student['marks']['math'];
console.log(mathMarks);
const subject='physics';
const marks4=student.marks[subject];
console.log(marks4);