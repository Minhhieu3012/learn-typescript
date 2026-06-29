export {};

type MyArrString = string[];
type MyArrNumber = number[];

type MyArr<T> = T[];

const a: MyArr<number> = [1, 2, 3];

const b: MyArr<string> = ["a", "b", "c"];

type Wrapper<T> = {
  data: T;
};

const c: Wrapper<number> = {
  data: 3012,
};

const d: Wrapper<string> = {
  data: "ohito",
};
