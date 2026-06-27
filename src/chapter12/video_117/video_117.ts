export {};

class Parent {
  //field
  gold: number | undefined;
  money: number | undefined;

  //method
  shareAHouse() {
    console.log("share a house from parent");
  }
}

class Child extends Parent {
  name: string | undefined;

  //method
  shareAHouse() {
    super.shareAHouse();
    console.log("share a house from child");
  }
}

const ohito = new Child();
ohito.shareAHouse();

//1. cha - con

//Animal - Dog
//Person - Student

//Employee - Developer

class Animal {}
class Dog extends Animal {}
