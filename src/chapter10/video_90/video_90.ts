export {};

let name: unknown = "ohito";
if (typeof name === "string") {
  name.toUpperCase();
}

let name1: any = "ohito";
name1.toUpperCase();

let name2: string = "ohito";
name2.toUpperCase();
