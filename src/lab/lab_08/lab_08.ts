export {};

type TRole = "student" | "teacher";

class User {
  public name: string;

  private _email: string;

  protected role: TRole;

  constructor(name: string, email: string, role?: TRole) {
    this.name = name;
    this._email = email;
    this.role = role ?? "student";
  }

  public get email(): string {
    return this._email;
  }
  public set email(value: string) {
    this._email = value;
  }

  printUserInfo() {
    console.log(
      `[GET INFO]
        name: ${this.name}
        email: ${this._email}
        role: ${this.role}
    `,
    );
  }
}

class Teacher extends User {
  courses: string[] = []; //[js,java,typeScript,..]

  constructor(name: string, email: string, role: TRole) {
    super(name, email, role);
  }

  addCourse(courseName: string) {
    this.courses.push(courseName);
  }

  printUserInfo() {
    const courseName = this.courses.join(","); //js,java,...
    console.log(`[${this.role}] ${this.name} - Courses Taught: ${courseName} `);
  }
}

class Student extends User {
  enrolledCourses: string[] = [];

  constructor(name: string, email: string) {
    super(name, email);
  }

  enroll(courseName: string) {
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
