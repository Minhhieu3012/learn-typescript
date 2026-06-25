export {};

//union
let username: string | number = "ohito123@gmail.com"; //email

username = 301205; //id

username = "0123456789"; //phone number

const printUsername = (username: string | number) => {
  if (typeof username === "string") {
    console.log("your username:", username.toUpperCase());
  }
};

printUsername("ohito");
