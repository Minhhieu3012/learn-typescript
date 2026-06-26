export {};

type TUsername = string | number; //union type => dung dau ngoac

type TStudent = {
  id: number;
  name: string;
};

type TCoder = {
  address: string;
  language: string;
};

//intersection
type TProgrammer = TStudent & TCoder;

const ohito: TProgrammer = {
  id: 30,
  name: "ohito",
  address: "hcm",
  language: "typeScript",
};

let username: TUsername = "ohito";
username = 12345;
