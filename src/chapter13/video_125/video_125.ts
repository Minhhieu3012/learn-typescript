export {};

function testNumber(value: number) {
  return value;
}

function testString(value: string) {
  return value;
}

//generic
function testGeneric<T>(value: T) {
  return value;
}

const a = testGeneric<string>("ohito");
const b = testGeneric<number>(3012);
const c = testGeneric<boolean>(true);

function getFirstElementInArray<T>(arr: T[]) {
  return arr[0];
}

const a1 = getFirstElementInArray<number>([1, 2, 3]);
const a2 = getFirstElementInArray<string>(["1", "2", "3"]);

const getFirstElementInArray2 = <T>(arr: T[]) => {
  return arr[0];
};
