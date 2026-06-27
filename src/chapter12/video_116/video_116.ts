export {};

class Cat {
  public name: string;
  private age_: number;

  private _id: number = 1;
  public get id(): number {
    return this._id;
  }
  public set id(value: number) {
    this._id = value;
  }

  private _color: string = "white";
  public get color(): string {
    return this._color;
  }
  public set color(value: string) {
    this._color = value;
  }

  //setter => setAge
  set age(value: number) {
    this.age_ = value;
  }

  // getter => getName, getAge
  get age() {
    return this.age_;
  }

  constructor(name: string, age: number) {
    this.name = name;
    this.age_ = age;
  }

  makeSound() {
    console.log("meow meow...");
  }
}

const myCat = new Cat("ohito", 20);

const a = myCat.age; //get
myCat.age = 20; //set
