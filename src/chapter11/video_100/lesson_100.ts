export {};

type TRole = string | number;

type TSuperRole = "user" | "admin";

const user: TRole = "user";
const admin: TRole = "admin";
const superAdmin: TRole = 1;

const otherUser: TSuperRole = "admin";

enum RoleEnum {
  USER = "USER", // 0
  ADMIN = "ADMIN", // 1
  SUPERADMIN = "SUPERADMIN", // 2
}

const myRole1: RoleEnum = RoleEnum.ADMIN;
const myRole2: RoleEnum = RoleEnum.USER;

console.log(">> enum my role = ", myRole1);
console.log(">> enum my role = ", myRole2);
