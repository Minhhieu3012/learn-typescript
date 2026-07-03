const student1 = {
    id: 30,
    name: "hieu",
    email: "hieu123@gmail.com",
    isPremium: true,
    contact: "089205019898",
};
const student2 = {
    id: 12,
    name: "ohito",
    email: "ohito123@gmail.com",
    isPremium: false,
    contact: 123456,
};
const myCourse1 = {
    courseId: 16,
    title: "typeScript",
    price: 40000,
    students: [],
};
const myCourse2 = {
    courseId: 20,
    title: "javaScript",
    price: 50000,
    students: [],
};
const registerStudentToCourse = (student, course) => {
    course.students.push(student);
};
const printInfoCouse = (course) => {
    console.log(`
    Ten khoa hoc: ${course.title},
    So luong hoc vien dang ky: ${course.students.length}
    `);
    if (course.students.length === 0) {
        console.log("Chua co hoc vien");
    }
    else {
        const studentList = course.students.map((item) => item.name);
        console.log("Liet ke tung hoc vien: ", studentList.join(","));
    }
};
registerStudentToCourse(student1, myCourse1);
registerStudentToCourse(student2, myCourse1);
printInfoCouse(myCourse1);
console.log("===============================");
printInfoCouse(myCourse2);
export {};
