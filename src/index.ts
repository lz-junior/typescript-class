let x:number = 10;

x = 18

console.log(x)

// tipos básicos
let firstName: string = "Matheus";
let age: number = 23;
const isAdmin: boolean = true;

// object
const myNumbers: number[] = [1, 2, 3];

// tuplas
let myTuple: [number, string, string[]]
myTuple = [5, "teste", ["a", "b"]]

// object literals: {prop: value}
const user: { name: string; age: number } = {
  name: "Pedro",
  age: 18
}

// any
let a: any = 0;
a = "teste"
a = true
a = 39

// union type
let id: string | number = "10"
id = 200

// type alias
type myIdType = string | number
const productId: myIdType = "00027"
const userId: myIdType = 10

// type enum
enum Size {
  P = "Pequeno",
  M = "Medio",
  G = "Grande",
}
const camisa = {
  name: "Camisa gola V",
  tamanho: Size.G,
}

// literal types
let test: "autenticado" | null;

test = "autenticado"
test = null