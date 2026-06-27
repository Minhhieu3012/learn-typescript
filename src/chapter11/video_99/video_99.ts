export {};

type TName = string | null;

let name: TName = null;
name = "ohito";

const age: undefined = undefined;

const printName = (myName: string | null) => {
  //Non-null assertion operator (!)
  myName!.toUpperCase();
  console.log("Name: ", myName);
};
