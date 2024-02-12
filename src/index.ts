// let x:number = 10;

// x = 18

// console.log(x)

// // tipos básicos
// let firstName: string = "Matheus";
// let age: number = 23;
// const isAdmin: boolean = true;

// // object
// const myNumbers: number[] = [1, 2, 3];

// // tuplas
// let myTuple: [number, string, string[]]
// myTuple = [5, "teste", ["a", "b"]]

// // object literals: {prop: value}
// const user: { name: string; age: number } = {
//   name: "Pedro",
//   age: 18
// }

// // any
// let a: any = 0;
// a = "teste"
// a = true
// a = 39

// // union type
// let id: string | number = "10"
// id = 200

// // type alias
// type myIdType = string | number
// const productId: myIdType = "00027"
// const userId: myIdType = 10

// // type enum
// enum Size {
//   P = "Pequeno",
//   M = "Medio",
//   G = "Grande",
// }
// const camisa = {
//   name: "Camisa gola V",
//   tamanho: Size.G,
// }

// // literal types
// let test: "autenticado" | null;

// test = "autenticado"
// test = null

// // funções
// function soma(a:number, b:number) {
//   return a + b
// }

// function sayHello(name: string): string {
//   return `Hello ${name}`
// }

// function logger(msg: string): void {
//   console.log(msg)
// }

// function greeting(name: string, greet?: string) {
//   if(greet){
//     console.log(`Olá ${greet} ${name}`);
//     return;
//   }
//   console.log(`Olá ${name}`)
// }
// greeting("Junior")
// greeting("Carlos", "Mr.")

// // interfaces
// interface MathFunctionParams {
//   n1: number,
//   n2: number,
// }

// function sumNumbers(nums: MathFunctionParams) {
//   return nums.n1 + nums.n2
// }

// console.log(sumNumbers({n1:1, n2:2}))

// const someNumbers: MathFunctionParams = {
//   n1: 5, 
//   n2: 20,
// }
// console.log(sumNumbers(someNumbers))

// // narrowing
// // chegagem de tipos
// function doSomething(info: number | boolean) {
//   if (typeof info === "number") {
//     console.log(`O número é ${info}`);
//     return
//   }
//   console.log("Não foi passado nenhum número")
// }

// doSomething(5);
// doSomething(true);

// // generics
// function showArrayItems<T>(arr: T[]) {
//   arr.forEach((item)=> {
//     console.log(`Item: ${item}`);
//   });
// }

// const a1 = [1,2,3];
// const a2 = ["a", "b", "c"];

// showArrayItems(a1)
// showArrayItems(a2)





// EXEMPLOS


// classes
// class User {
//   name
//   role
//   isApproved

//   constructor(name:string, role:string, isApproved:boolean) {
//     this.name = name
//     this.role = role
//     this.isApproved = isApproved
//   }

//   showUserName() {
//     console.log(`O nome do usuário é ${this.name}`);
//   }

//   showUserRole(canShow: boolean): void {
//     if(canShow){
//       console.log(`Cargo do usuário é: ${this.role}`);
//       return;
//     }
//     console.log("Informação restrita!")
//   }
// }

// const junior = new User("Junior", "dev", true);
// console.log(junior);

// junior.showUserName();
// junior.showUserRole(false);

// // interfaces em classes
// interface IVehicles {
//   brand: string;
//   showBrand(): void;
// }

// class Car implements IVehicles {
//   brand;
//   wheels;

//   constructor(brand: string, wheels: number) {
//     this.brand = brand;
//     this.wheels = wheels;
//   }
//   showBrand(): void {
//     console.log(`A marca do carro é: ${this.brand}`);
//   }
// }

// const fusca = new Car("VW", 4);
// fusca.showBrand();

// // herança
// class SuperCar extends Car {
//   engine;

//   constructor(brand: string, wheels: number, engine: number) {
//     super(brand, wheels);
//     this.engine = engine;
//   }
// }

// const a4 = new SuperCar("Audi", 4, 2.0);

// console.log(a4);
// a4.showBrand();

// // decorators
// function BaseParameters() {
//   return function <T extends { new(...args: any[]): {} }>(constructor: T) {
//     return class extends constructor {
//       id = Math.random();
//       createdAt = new Date();
//     };
//   };
// }

// @BaseParameters()
// class Person {
//   name;

//   constructor(name: string) {
//     this.name = name;
//   }
// }
// const pedro = new Person("Pedro");
// console.log(pedro);




type Address = {
  street: string
  num: number
}

type User = {
  name?: string
  age: number
  address: Address
}

type UserProperties = keyof User

function pickProperty(user: User, property: UserProperties) {
  return user[property]
}

const usuario: User = {
  name: 'Carlos',
  age: 27,
  address: {
    street: 'Rua dos Camargos',
    num: 239
  }
}

console.log(pickProperty(usuario, 'age'))