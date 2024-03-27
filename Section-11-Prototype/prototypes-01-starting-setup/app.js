// class AgedPerson {
//     showAge () {
//     console.log(this.age);
//     }
// }

// class Person extends AgedPerson {
//     name = 'max';
//     constructor() {
//         super() ;
//         this.age = 30;
//     }

//     greet () {
//         console.log(`Hi ${this.name}`);
//     }
// }

// // const person1 = new People();
// // console.log(person1);
// // console.log(person1.__proto__);

// // function Person() {
// //     this.age = 30;
// //     this.name = 'Max';
// //     this.greet = function() {
// //         console.log("hi " + this.name);
// //     }
// // }
// // // Person.prototype = {
// // //     printAge() {
// // //         console.log(this.age);
// // //     }
// // // };

// // Person.prototype.newAge = function () {
// //     console.log(`hi ${this.name}, your age is ${this.age}`);
// // };

// // Person.describe = function (){
// //     console.log('creating person');
// // }

// // const person = new Person();
// // console.log(person);
// // console.log(person.__proto__);

// // person.printAge();
// // person.newAge();

// const p = new Person();
// console.log(p);

// const course = {
//   rating: 5,
//   title: "java",
// };

console.log(Object.getPrototypeOf(course));
// Overwritting the default prototype (__proto__)
Object.setPrototypeOf(course, {
	// ...Object.getPrototypeOf(course), -> keeping the original prototype object and adding our own to it.
  getRating: function () {
    console.log(`rating is ${this.rating}/5`);
  }
});

// console.log(Object.getPrototypeOf(course));

// --- getting and setting prototypes of Object.
const student = Object.create({
	printProgress: function() {
		console.log(this.progress);
	}
});
console.log(student);

Object.defineProperty(student, 'progress', {
	configurable: true, 
	enumerable:true,
	value: 2,
	writable: true
});
console.log(student);
console.log(student.progress);
