"use strict";
//excrice1
function sum1(numbers) {
    let sum = 0;
    numbers.forEach(element => {
        sum += element;
    });
    return sum;
}
function isEven(num) {
    if (num % 2 == 0) {
        return true;
    }
    return false;
}
console.log(isEven(sum1([1, 2, 3])));
console.log(isEven(sum1([1, 2, 3, 5, 6])));
console.log(isEven(sum1([1, 2, 3, 6, 8, 9, 1])));
//excrice2
class Student {
    constructor(name, age, grades) {
        this.grades = grades;
        this.name = name;
        this.age = age;
    }
    addGrade(grade) {
        this.grades.push(grade);
    }
    getGradeAvg() {
        let Average = 0;
        this.grades.forEach(element => {
            Average += element;
        });
        return (Average / this.grades.length);
    }
}
let ArryStudent = [new Student("amit", 2, []), new Student("lolo", 5, []), new Student("dodo", 7, [4, 6])];
for (let i = 0; i < ArryStudent.length; i++) {
    for (let j = 0; j < 4; j++) {
        ArryStudent[i].addGrade(Math.floor(Math.random() * 4));
    }
}
ArryStudent.forEach(student => {
    console.log(student.grades);
    console.log(`${student.name} ${student.getGradeAvg()}`);
});
//# sourceMappingURL=excrice.js.map