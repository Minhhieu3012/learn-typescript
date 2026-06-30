"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class NhanVien {
    constructor(name, id, salary) {
        this.name = name;
        this._id = id;
        this.salary = salary;
    }
    get id() {
        return this._id;
    }
    set id(value) {
        this._id = value;
    }
}
exports.default = NhanVien;
