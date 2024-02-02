"use strict";
// let x:number = 10;
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
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
// classes
class User {
    constructor(name, role, isApproved) {
        this.name = name;
        this.role = role;
        this.isApproved = isApproved;
    }
    showUserName() {
        console.log(`O nome do usuário é ${this.name}`);
    }
    showUserRole(canShow) {
        if (canShow) {
            console.log(`Cargo do usuário é: ${this.role}`);
            return;
        }
        console.log("Informação restrita!");
    }
}
const junior = new User("Junior", "dev", true);
console.log(junior);
junior.showUserName();
junior.showUserRole(false);
class Car {
    constructor(brand, wheels) {
        this.brand = brand;
        this.wheels = wheels;
    }
    showBrand() {
        console.log(`A marca do carro é: ${this.brand}`);
    }
}
const fusca = new Car("VW", 4);
fusca.showBrand();
// herança
class SuperCar extends Car {
    constructor(brand, wheels, engine) {
        super(brand, wheels);
        this.engine = engine;
    }
}
const a4 = new SuperCar("Audi", 4, 2.0);
console.log(a4);
a4.showBrand();
// decorators
function BaseParameters() {
    return function (constructor) {
        return class extends constructor {
            constructor() {
                super(...arguments);
                this.id = Math.random();
                this.createdAt = new Date();
            }
        };
    };
}
let Person = class Person {
    constructor(name) {
        this.name = name;
    }
};
Person = __decorate([
    BaseParameters()
], Person);
const pedro = new Person("Pedro");
console.log(pedro);
