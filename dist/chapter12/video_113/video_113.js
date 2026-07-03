class SinhVien {
    //phuong thuc (methods)
    sleep() {
        console.log("di ngu", this.name);
    }
}
const sv1 = new SinhVien();
sv1.name = "hieu";
sv1.id = 3012;
sv1.sleep();
console.log("=========");
const sv2 = new SinhVien();
sv2.name = "ohito";
sv2.id = 3012;
sv2.sleep();
export {};
