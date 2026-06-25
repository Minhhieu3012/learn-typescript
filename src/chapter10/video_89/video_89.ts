export {};

// option 1
const name: string[] = ["ohito", "hieu phan"];
const score: number[] = [1, 2, 3];

// option 2: generic
const name2: Array<string> = ["ohito", "hieu phan"];
const score2: Array<number> = [1, 2, 3];

console.log("name: ", name);
console.log("score: ", score);
