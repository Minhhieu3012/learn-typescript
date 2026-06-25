export {};

// type aliases
// T duoc dinh nghia la Type | I duoc dinh nghia la Interface
type TStudent = {
  id: string;
  name: string;
  address: string;
  age: number;
};

const student1: TStudent = {
  id: "sv1",
  name: "ohito",
  address: "hcm",
  age: 21,
};

const student2: TStudent = {
  id: "sv2",
  name: "hieu",
  address: "hcm",
  age: 21,
};

const printInfo = (st: TStudent) => {
  console.log("Student name:", st.name);
};

printInfo(student1);
printInfo(student2);
