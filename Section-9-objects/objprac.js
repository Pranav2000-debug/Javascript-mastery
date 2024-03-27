// const person = {
//   name: "max",
//   age: 30,
//   hobbies: ["sports", "cooking"],
//   greet: function () {
//     alert(`Hi ${this.name}`);
//   },
// };
// for (const property in person) {
//   console.log(`${property} : ${person[property]}`);
// }
//     // person.isAdmin = true; // assigning a new value, via dot notation.
//     // delete person.age; // deleting a property, via 'delete' keyword (setting it to undefined); therefore person.age = undefined; but don't do this.
//     // console.log(person);

//     // example of using strings as keys and using square bracket notation to access such key-value pairs.
//     const userChosenKeyName = 'level'; // example of user input used as a key name (level is property name)
//     const person2 = {
//       "first name": "John",
//       age: 30,
//     	[userChosenKeyName]: '...', // using sqr bracket to reference a variable to assign a property name to the object bcz using a normal key name would result in a new property name.
//       hobbies: ["sports", "cooking"],
//       greet: function () {
//         alert(`Hi ${this.name}`);
//       },
//     	1.5: 'number key',
//     };
//     person2.isAdmin = true;
//     // square bracket accessing (use strings as keys)
//     console.log(person2['first name']);
//     console.log(person2['age']);
//     // accessing a number property (can omit apostrophes)
//     console.log(person2[1.5]);
//     console.log(person2)
//     // accessing a value via a variable. (dynamic feauture)
//     const keyName = 'first name';
//     console.log(person2[keyName]);

//     // example.
//     const propKey = 'field 12';
//     const person3 = {
//         [propKey]: 'Max'
//     };
//     console.log(person3['field 12']);

// ---------------------------OBJECT SPREAD OPERATOR.-------------------------
// const ppl = {
//   name: "max",
//   hobbies: ["sports", "cooking"],
// };
// // const anotherPpl = ppl; // same reference
// // anotherPpl.age = 31;
// // console.log(ppl);

// const anotherPerson = { ...ppl }; // creates a new object with the values of the old object. (not a deep copy. copies the top level key-val pairs.)
// // if there are any refernce types within the object, the inner reference types are copied but witht the same refernce to the old object. meaning changes to the old value of reference type within an object will be affected. just like in arrays.
// // ppl.age = 31;
// ppl.age = 31;
// ppl.hobbies.push("new hobby"); // array is the reference type.
// console.log(ppl);
// anotherPerson.address = "jane street";
// console.log(anotherPerson);
// console.log("---------------------------------");
// // soulution
// const anotherPerson2 = { ...ppl, age: 29, hobbies: [...ppl.hobbies] };
// ppl.hobbies.push("swimming");
// console.log(ppl);
// console.log(anotherPerson2);

// another method.
// const data = {
//   score: 31,
//   level: 5,
//   remark: 'Cleared',
//   weapons: ['knives', 'swords']
// };
// const data2 = Object.assign({}, data);
// data.lives = 2;
// data.score = 25;
// data.weapons.push('axe');
// console.log(data);
// console.log(data2);


// -----------------------this KEYWORD IN ARROW FUNCTIONS------------------
const members = {
  teamName: 'blue rockets',
  teamMembers: ['Max', 'John'],
  getTeamMembers: function(){
    this.teamMembers.forEach((member) => {
      console.log(member + ' - ' + this.teamName); // arrow function. does not know 'this' hence binds to the next global object which would've been window, but here the next object is the object members. hence this refers to the members obj. arrow func does not change the binding. 
    });
  }
};
members.getTeamMembers();

// The this keyword can lead to some headaches in JavaScript - this summary hopefully acts as a remedy.

// this refers to different things, depending on where it's used and how (if used in a function) a function is called.

// Generally, this refers to the "thing" which called a function (if used inside of a function). That can be the global context, an object or some bound data/ object (e.g. when the browser binds this to the button that triggered a click event).

// 1) this in Global Context (i.e. outside of any function)

// function something() { ... }
 
// console.log(this); // logs global object (window in browser) - ALWAYS (also in strict mode)!
// 2) this in a Function (non-Arrow) - Called in the global context

// function something() { 
//     console.log(this);
// }
 
// something(); // logs global object (window in browser) in non-strict mode, undefined in strict mode
// 3) this in an Arrow-Function - Called in the global context

// const something = () => { 
//     console.log(this);
// }
 
// something(); // logs global object (window in browser) - ALWAYS (also in strict mode)!
// 4) this in a Method (non-Arrow) - Called on an object

// const person = { 
//     name: 'Max',
//     greet: function() { // or use method shorthand: greet() { ... }
//         console.log(this.name);
//     }
// };
 
// person.greet(); // logs 'Max', "this" refers to the person object
// // 5) this in a Method (Arrow Function) - Called on an object

// const person = { 
//     name: 'Max',
//     greet: () => {
//         console.log(this.name);
//     }
// };
 
// person.greet(); // logs nothing (or some global name on window object), "this" refers to global (window) object, even in strict mode
// // this can refer to unexpected things if you call it on some other object, e.g.:

// const person = { 
//     name: 'Max',
//     greet() {
//         console.log(this.name);
//     }
// };
 
// const anotherPerson = { name: 'Manuel' }; // does NOT have a built-in greet method!
 
// anotherPerson.sayHi = person.greet; // greet is NOT called here, it's just assigned to a new property/ method on the "anotherPerson" object
 
// anotherPerson.sayHi(); // logs 'Manuel' because method is called on "anotherPerson" object => "this" refers to the "thing" which called it
// If in doubt, a console.log(this); can always help you find out what this is referring to at the moment!