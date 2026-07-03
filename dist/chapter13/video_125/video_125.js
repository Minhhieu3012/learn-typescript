function testNumber(value) {
    return value;
}
function testString(value) {
    return value;
}
//generic
function testGeneric(value) {
    return value;
}
const a = testGeneric("ohito");
const b = testGeneric(3012);
const c = testGeneric(true);
function getFirstElementInArray(arr) {
    return arr[0];
}
const a1 = getFirstElementInArray([1, 2, 3]);
const a2 = getFirstElementInArray(["1", "2", "3"]);
const getFirstElementInArray2 = (arr) => {
    return arr[0];
};
export {};
