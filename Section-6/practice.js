// const DEFAULT_STRING = "Welcome";

// const sayHello = (name) => {
//   console.log("hi " + name);
// };

// const sayHello1 = (name, phrase = DEFAULT_STRING) =>
//   console.log(`${phrase} ${name}`);

// const sayHello2 = () => {
//   console.log("hi max");
// };
// const sayHello3 = (name) => "hello " + name;

// sayHello("max");
// sayHello1("max", "Hi");
// sayHello2();
// console.log(sayHello3("max"));
// sayHello1("George");

// const checkInput = (cb, ...unlim) => {
//   for (const text of unlim) {
//     if (!text) {
//       return;
//     }
//   }
//   cb();
// };

// checkInput(
//   () => {
//     console.log("all strings are !empty");
//   },
//   "hello",
//   "hi",
//   "yes",
//   "wow"
// );


const sumUp = (resultHandler, ...numbers) => {
  const validateNumber = (number) => {
    return isNaN(number) ? 0 : number;
  };

  let sum = 0;
  for (const num of numbers) {
    sum += validateNumber(num);
  }
  resultHandler(sum);
};

const subtractUp = function (resultHandler, ...numbers) {
  let sum = 0;
  for (const num of numbers) {
    // don't use that
    sum -= num;
  }
  resultHandler(sum);
};

const showResult = (result) => {
  console.log("the result after adding all numbers is " + result);
};

console.log(sumUp(showResult, "fdsa", -3, 6, 10));
console.log(sumUp(showResult, 5, 10, -3, 6, 10, 25, 88));
console.log(subtractUp(showResult, 10, 15, 20));
