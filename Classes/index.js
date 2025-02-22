class Person {
    constructor(firstName, lastName, age, address) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.address = address;
    }
    fullName() {
        console.log(`${this.firstName} ${this.lastName}`);
    }
};
class Student extends Person {
    constructor(firstName, lastName, age, address, subjects, academy) {
        super(firstName, lastName, age, address);
        this.subjects = subjects; 
        this.academy = academy;
    }
    static studiesSubject(student, subject) {
        return student.subjects.includes(subject);
    }
};
let student1 = new Student("Bojan", "Stojanov", 20, "1 Vinica", ["Math", "Physics", "Programming"], "Tech Academy");
let student2 = new Student("Petar", "Petrov", 22, "22 Vinica", ["Biology", "Chemistry", "Math"], "Science Academy");

student1.fullName();
student2.fullName();

console.log(Student.studiesSubject(student1, "Math")); 
console.log(Student.studiesSubject(student2, "Physics")); 