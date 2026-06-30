"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const laptrinhvien_1 = __importDefault(require("./laptrinhvien"));
const ohito = new laptrinhvien_1.default("ohito", 30, 1000, 20);
ohito.printInfo();
