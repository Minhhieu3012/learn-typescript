export {};

//class: dinh nghia tong quat
class Lion {
  //dac diem
  name: string | undefined;
  color: string | undefined;

  //hanh vi
  sleep() {
    console.log("Lion is sleeping...", this.name);
  }
}

//object: mieu ta cu the
const lion1 = new Lion(); //clone
lion1.color = "yellow";
lion1.name = "ohito";
lion1.sleep();

console.log("=========");

const lion2 = new Lion(); //clone
lion2.color = "white";
lion2.name = "hieu";
lion2.sleep();
