const user = "user";
const admin = "admin";
const superAdmin = 1;
const otherUser = "admin";
//Enumeration
var RoleEnum;
(function (RoleEnum) {
    RoleEnum["USER"] = "USER";
    RoleEnum["ADMIN"] = "ADMIN";
    RoleEnum["SUPERADMIN"] = "SUPERADMIN";
})(RoleEnum || (RoleEnum = {}));
const myRole1 = RoleEnum.ADMIN;
const myRole2 = RoleEnum.USER;
console.log(">> enum my role = ", myRole1);
console.log(">> enum my role = ", myRole2);
export {};
