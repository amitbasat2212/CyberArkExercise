class Person {
    constructor(name, startYear) {
        this.name = name
        this.startYear = startYear
        this.courses = []
    }

    addCourse(course) {
        this.courses.push(course)
    }
}

class Student extends Person {
    constructor(name, startYear) {
        super(name, startYear)
        this.grades = []
    }

    receiveGrade(courseName, finalGrade) {
        this.grades.push({
            course: courseName,
            grade: finalGrade
        })
    }
}

const s1 = new Student("Ronda", 2017)
console.log(s1.name) //prints "Ronda"

s1.addCourse("Algebra II")
console.log(s1.courses) //prints ["Algebra II"]



//spot check 1+3 
class Teacher extends Person {
    constructor(name,startYear,salary){
        super(name,startYear);
        this.salary=salary;
        this.courses={};
    }
    giveGrade(student,CourseName,grade){
        student.receiveGrade(CourseName,grade); 
    }
    addCourse(course){   
         if(this.courses[course]){
            this.courses[course]=this.courses[course]+1
        }else{
            this.courses[course] = 1   
        }  
    }
}

const s2 = new Student("Ronda", 2017)
const t1 = new Teacher("Cassandra", 2002, 40000)

t1.giveGrade(s2, "Algebra II", 82)
const firstGrade = s2.grades[0]

console.log(`${s2.name} received an ${firstGrade.grade} in ${firstGrade.course}`)
//above should print "Ronda received an 82 in Algebra II"﻿


//

// const s1 = new Student("Ronda", 2017)
// console.log(s1 instanceof Student) //prints true


//spot check 3
const t2 = new Teacher("Cassandra", 2002, 40000)
t2.addCourse("Algebra II")
t2.addCourse("Algebra II")
t2.addCourse("Trigonometry")
console.log(t2.courses) //should print {Algebra II: 2, Trigonometry: 1}


//spot check 4 
class TeachingAssistant extends Teacher {
    constructor(name, startYear, salary) {
        super(name, startYear, salary)
    }
}
const ta1 = new TeachingAssistant("Brandon", 2014, 20000)
console.log(ta1.toString())




