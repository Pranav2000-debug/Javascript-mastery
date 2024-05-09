// CLASSES

// IN TYPESCRIPT WE HAVE TO ADD PROPERTY NAMES AS FIELDS.

//  TS ALSO GIVES US ACCES TO MODIFIERS. (properties intended to be used from only inside the class or also from outside of it)
// class User {
//   name: string;
// 	// private modifier
//   private age: number;

//   constructor(name: string, age: number) {
//     this.name = name;
//     this.age = age;
//   }
// }

// WE CAN ALSO ADD -----------MODIFIERS----------- IN CONSTRUCTOR PARAMS to shorten code
// By doing this, you tell Typescript these parameters should also be automatically converted to properties
class User {
  constructor(public name: string, private age: number) {
    // got rid of code here.
  }
}

// CAN ALSO DO INHERITANCE
class Admin extends User {
  constructor(name: string, age: number, private permission: string[]) {
    super(name, age);
  }
}

const user1 = new User("max", 28);
console.log(user1.name); // will show error if we use user1.age, since age is private property

// ----------------INTERFACES----------------
// can't use 'new' here
interface CaculationContainer {
  res: number;
  printerRes(): void;
}
// USING IT AS A TYPE of array of objects with the given structure above
type CaculationResults = CaculationContainer[];

// Can also use interface to make clear that (in classes) that every class that implements a given interface should have certain properties or methods. Ex:-
interface Greetable {
  name: string;
}
interface PrintGreet {
  print(): void;
}
class UserGreet implements Greetable, PrintGreet {
  constructor(public name: string) {}
  print() {
    console.log(this.name);
  }
}

// -------GENERIC TYPES-------
interface PowContainer {
	res: number;
	isSafe: string
}
type PowResult = PowContainer[];
// an array turns out to be a type in Typescript which is a so-called generic type.
// const resultArray: PowResult = [];
const resultArray: Array<any> = [];
// Here any specifies which type of data array stores
// using const resultArray: PowResult = []; --- Powresult is syntatic sugar for Array<PowResult>
// An array of type PowResult having PowContainer interface object.

// 'Promises' are also a type of generic type where a for example a fetct() returns a Promise with a resolved or rejected type, so Promise is a generic type which also returns another type of data

// We can make our own generic types too:-
// Adding <> and using T as a placeholder. (norm to use T)
function logAndEcho<T>(val: T) {
	console.log(val);
	return val;
}
// whoever calls logAndEcho should give the precise, the exact type of data to work with.
logAndEcho<string>('Hi there').split(' ');