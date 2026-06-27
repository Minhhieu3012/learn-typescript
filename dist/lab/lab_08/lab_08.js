"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class User {
    constructor(name, email, role) {
        this.name = name;
        this._email = email;
        this.role = role ?? "student";
    }
    get email() {
        return this._email;
    }
    set email(value) {
        this._email = value;
    }
    printUserInfo() {
        console.log(`[GET INFO]
        name: ${this.name}
        email: ${this._email}
        role: ${this.role}
    `);
    }
}
class Teacher extends User {
    constructor(name, email, role) {
        super(name, email, role);
        this.courses = []; //[js,java,typeScript,..]
    }
    addCourse(courseName) {
        this.courses.push(courseName);
    }
    printUserInfo() {
        const courseName = this.courses.join(","); //js,java,...
        console.log(`[${this.role}] ${this.name} - Courses Taught: ${courseName} `);
    }
}
class Student extends User {
    constructor(name, email) {
        super(name, email);
        this.enrolledCourses = [];
    }
    enroll(courseName) {
        this.enrolledCourses.push(courseName);
    }
    printUserInfo() {
        const courseName = this.enrolledCourses.join(",");
        console.log(`[${this.role}] ${this.name} - Enrolled Courses: ${courseName}`);
    }
}
const ohito = new Student("Ohito", "ohito@email.com");
ohito.enroll("TypeScript");
ohito.enroll("Node JS");
const hieu = new Teacher("Hieu", "hieu@email.com", "teacher");
hieu.addCourse("React");
hieu.addCourse("TypeScript");
ohito.printUserInfo();
hieu.printUserInfo();
