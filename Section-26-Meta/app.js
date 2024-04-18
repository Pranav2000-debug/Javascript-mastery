// // library land
// const uid = Symbol('uid'); // if left unexposed, users of the library have no way of using it !!
// console.log(uid);

// const user = {
//     [uid]: 'p1',
//     name: 'Max',
//     age: 30
// };
// //  app land => using the library
// user.id = 'p2' // this should not be possible by the user using the library

// console.log(user);
// user[uid] = 12; // here i know symbol uid, therefore i can use it
// console.log(user);

// const user2 = {
//     [uid]: 'p1',
//     name: 'Max',
//     age: 30
// };

// console.log(JSON.stringify(user2));

// ####################Iterator##################

// const company = {
//   curEmployee: 0,
//   employees: ["Max", "John", "Anna"],
//   next() {
//     if (this.curEmployee >= this.employees.length) {
//       return { value: this.curEmployee, done: true };
//     }
//     let returnVal = { value: this.employees[this.curEmployee], done: false };
//     this.curEmployee++;
//     return returnVal;
//   },
// };

// console.log(company.next());
// console.log(company.next());
// console.log(company.next());
// console.log(company.next());
// console.log(company.next());

// let employee = company.next();
// while(!employee.done) {
//     console.log(employee.value);
//     employee = company.next();
// }

// ###################Generators and Iterators###################

// const company2 = {
  // curEmployee: 0,
  // employees: ["Max", "John", "Anna"],
  // next() {
  //   if (this.curEmployee >= this.employees.length) {
  //     return { value: this.curEmployee, done: true };
  //   }
  //   let returnVal = { value: this.employees[this.curEmployee], done: false };
  //   this.curEmployee++;
  //   return returnVal;
  // },
  // [Symbol.iterator]: function* employeeGenerator() {
    // * symbolizes a generator function // changing getEmployee to [Symbol.iterator] to use a forof loop
    // let employee = company.next();
    // let currEmployee = 0;
    // while (currEmployee < this.employees.length) {
      // yield this.employees[currEmployee]; // yield creates an object with a next method and returns. What we were previously doing manually is now being done by this keyword
      // currEmployee++;
    // }
  // },
// };

// for (const employee of company2) {
  // console.log(employee);
// }

// const it = company2.getEmployee(); // calling the generator function. Returns an object that has the next method.
// console.log(company2.getEmployee());
// console.log(it.next()); // calling the next method on the generator that returns such an object with its own next method.
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());

// ###########################REFLECT API###########################
const course = {
  title: "Javascript - the complete guide",
  duration: 52
};

// Reflect.setPrototypeOf(course, {
//   toString() {
//     return this.title;
//   },
// });
// console.log(course.toString());
// console.log(course);

// #############################Proxy API############################
// Proxy hanlder (TRAPS)
const courseHandler = {
  get(obj, propertyName) {
    console.log(propertyName);
    return obj[propertyName]; // return the value
  },
  set(obj, propertyName, newValue) {
    if(propertyName === 'rating') { // block accesson certain conditions.
      return;
    }
    obj[propertyName] = newValue;
  }
};

const pCourse = new Proxy(course, courseHandler);
console.log(pCourse);
pCourse.rating = 5;
console.log(pCourse.rating);

console.log(course.rating); // course object gets updated too
console.log(pCourse.title);
