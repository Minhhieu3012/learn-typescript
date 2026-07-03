import NhanVien from "./nhanvien";
export default class LapTrinhVien extends NhanVien {
    constructor(name, id, salary, age) {
        super(name, id, salary);
        this.age = age;
    }
    printInfo() {
        console.log("protected salary:", this.salary);
    }
}
