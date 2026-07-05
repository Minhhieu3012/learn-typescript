export {};
/*
1. Class User (cha):
Thuộc tính:
name: string (public)
email: string (private)
role: "student" | "teacher" (protected)
Sử dụng Constructor: Khởi tạo thông tin user với constructor. Nếu không truyền role thì mặc định là "student".
Phương thức:
get email() -> trả về email
set email(email: string) -> cập nhật email nếu hợp lệ
getInfo() -> trả về thông tin người dùng
*/
/*
2. Kế thừa (Inheritance):
Class Teacher:
Thuộc tính: courses: string[ ]
Phương thức: * addCourse(courseName: string): void
printUserInfo: [Teacher] Eric - Courses Taught: React
Class Student:
Thuộc tính: enrolledCourses: string[ ]
Phương thức: * enroll(courseName: string): void
printUserInfo: [Student] Hoidanit - Enrolled Courses: TypeScript Pro
*/
/*
3. Tính Đa Hình (Polymorphism):
Tạo hàm printUserInfo(user: User)
-> Dùng tính đa hình để hiển thị thông tin khác nhau tùy theo loại user (Teacher hoặc Student).
*/
/*
Output mong muốn:
JavaScript
const hoidanit = new Student("Hoidanit", "hoidanit@email.com");
hoidanit.enroll("TypeScript Pro");

const eric = new Teacher("Eric", "eric@email.com", "teacher");
eric.addCourse("React");

printUserInfo(hoidanit);
// 👉 Output:
// [Student] Hoidanit - Enrolled Courses: TypeScript Pro

printUserInfo(eric);
// 👉 Output:
// [Teacher] Eric - Courses Taught: React
*/
