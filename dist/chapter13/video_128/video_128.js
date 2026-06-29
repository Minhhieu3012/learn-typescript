"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class MagicBox {
    constructor(content) {
        this.content = content;
    }
}
const a = new MagicBox(123);
const b = new MagicBox("ohito");
class NumberBox {
    constructor(content) {
        this.content = content;
    }
}
class StringBox {
    constructor(content) {
        this.content = content;
    }
}
