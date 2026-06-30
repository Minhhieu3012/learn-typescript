"use strict";
console.log("commonjs module");
const testCommon = () => {
    console.log("test common");
};
//@ts-ignore
module.export = { testCommon };
