console.log("commonjs module");

const testCommon = (value) => {
  console.log("test common", value);
};

//@ts-ignore
module.exports = { testCommon };
