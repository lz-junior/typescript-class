"use strict";
let x = 10;
x = 18;
console.log(x);
// tipos básicos
let firstName = "Matheus";
let age = 23;
const isAdmin = true;
// object
const myNumbers = [1, 2, 3];
// tuplas
let myTuple;
myTuple = [5, "teste", ["a", "b"]];
// object literals: {prop: value}
const user = {
    name: "Pedro",
    age: 18
};
// any
let a = 0;
a = "teste";
a = true;
a = 39;
// union type
let id = "10";
id = 200;
const productId = "00027";
const userId = 10;
// type enum
var Size;
(function (Size) {
    Size["P"] = "Pequeno";
    Size["M"] = "Medio";
    Size["G"] = "Grande";
})(Size || (Size = {}));
const camisa = {
    name: "Camisa gola V",
    tamanho: Size.G,
};
// literal types
let test;
test = "autenticado";
test = null;
// funções
function soma(a, b) {
    return a + b;
}
function sayHello(name) {
    return `Hello ${name}`;
}
function logger(msg) {
    console.log(msg);
}
function greeting(name, greet) {
    if (greet) {
        console.log(`Olá ${greet} ${name}`);
        return;
    }
    console.log(`Olá ${name}`);
}
greeting("Junior");
greeting("Carlos", "Mr.");
function sumNumbers(nums) {
    return nums.n1 + nums.n2;
}
console.log(sumNumbers({ n1: 1, n2: 2 }));
const someNumbers = {
    n1: 5,
    n2: 20,
};
console.log(sumNumbers(someNumbers));
// narrowing
// chegagem de tipos
function doSomething(info) {
    if (typeof info === "number") {
        console.log(`O número é ${info}`);
        return;
    }
    console.log("Não foi passado nenhum número");
}
doSomething(5);
doSomething(true);
// generics
function showArrayItems(arr) {
    arr.forEach((item) => {
        console.log(`Item: ${item}`);
    });
}
const a1 = [1, 2, 3];
const a2 = ["a", "b", "c"];
showArrayItems(a1);
showArrayItems(a2);
