"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Bird {
    makeSound() {
        console.log("chim keu chip chip");
    }
    doFly() {
        console.log("chim biet bay");
    }
}
const myBird = new Bird();
myBird.makeSound();
myBird.doFly();
//don ke thua
class Person {
}
class NhanVien {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
}
class LapTrinhVien extends NhanVien {
    constructor(skill, name, id) {
        super(id, name);
        this.skill = skill;
    }
}
const ohito = new LapTrinhVien("typeScript", "hieu", 3012);
