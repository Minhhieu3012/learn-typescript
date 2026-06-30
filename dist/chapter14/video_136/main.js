"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// import { Animal } from "./animal";
const animal_1 = __importDefault(require("./animal")); //default import
const math_1 = require("./math");
console.log("main");
const minus = "hieu";
console.log("minus: 30 - 12 =", (0, math_1.minus)(30, 12), "and minus =", minus);
const a = new animal_1.default("dog");
