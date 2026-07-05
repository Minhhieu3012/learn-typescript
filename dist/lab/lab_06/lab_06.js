const student1 = {
    id: 30,
    name: "student1",
    email: "student1@gmail.com",
    isPremium: true,
    contact: "089205019898",
};
const student2 = {
    id: 12,
    name: "student2",
    email: "student2@gmail.com",
    isPremium: false,
    contact: 123456,
};
const myCourse1 = {
    courseId: 11,
    title: "javaScript",
    price: 100000,
    students: [],
};
const myCourse2 = {
    courseId: 22,
    title: "typescript",
    price: 50000,
    students: [],
};
/*
3. Viết hàm registerStudentToCourse(student, course)
Chức năng: Thêm học viên vào danh sách của khóa học.
*/
const registerStudentToCourse = (student, course) => {
    course.students.push(student);
};
/*
4. Viết hàm printCourseInfo(course)
Chức năng:  In ra tên khóa học và số học viên đã đăng ký.
Nếu chưa có học viên -> in "Chưa có học viên nào."  Nếu có học viên -> liệt kê tên từng học viên.
*/
const printCourseInfo = (course) => {
    console.log(`
        Course name: ${course.title}, 
        Number of student register: ${course.students.length}    
    `);
    if (course.students.length === 0) {
        console.log("No one in this course");
    }
    else {
        const studentList = course.students.map((item) => item.name);
        console.log("List each students:", studentList.join(","));
    }
};
registerStudentToCourse(student1, myCourse1);
registerStudentToCourse(student2, myCourse1);
printCourseInfo(myCourse1);
console.log("==================================");
printCourseInfo(myCourse2);
export {};
