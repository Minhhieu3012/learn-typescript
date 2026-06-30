"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const nhanvien_1 = __importDefault(require("./nhanvien"));
class LapTrinhVien extends nhanvien_1.default {
    constructor(name, id, salary, age) {
        super(name, id, salary);
        this.age = age;
    }
    printInfo() {
        console.log("protected salary:", this.salary);
    }
}
exports.default = LapTrinhVien;
