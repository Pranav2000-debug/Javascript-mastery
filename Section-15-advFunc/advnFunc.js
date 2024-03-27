// function add(num1, num2) {
//   return num1 + num2;
// }
// console.log(add(1,5));

// function addRandom(num1) {
//     return num1 + Math.random();
// }
// console.log(addRandom(2));

// let prevResult = 0;

// function addMoreNumber (num1, num2) {
//     const sum = num1 + num2;
//     prevResult = sum;
//     return sum;
// }
// console.log(addMoreNumber(2,5), prevResult);

// const hobbies = ['sports', 'coding'];

// function printHobbies (h) {
//     h.push('new hobby');
//     console.log(h);
// }

// printHobbies(hobbies);

// ########################Factory Functions########################
// this returns a function with a pre configured val that can be used. Can pass different vals to the returned functions. call the consts as functions since they store a pointer to the function
// function createTaxCalculator (tax) {
//     function calcTax (amt) {
//         return amt * tax;
//     }
//     return calcTax;
// }

// const vatAmt = createTaxCalculator(0.19);
// const incomeTax = createTaxCalculator(0.25);

// console.log(vatAmt(130));
// console.log(incomeTax(300));

// CLOSURES

// let userName = 'Max';

// // reaching out to the surrounding lexical environment (closes over the surrounding)
// // function greet() {
// //     let name = userName;
// //     console.log('hi ' + name);
// // }

// // userName = 'Manuel';
// // greet();

// function greet() {
//     console.log('hi ' + userName2);
// }

// let userName2 = 'Manuel';
// greet();

// --------------RECURSION--------------

// function powerOf(x, n) {
//   let result = 1;
//   for (let i = 0; i < n; i++) {
//     result = result * x;
//   }
//   return result;
// }
// console.log(powerOf(2, 3));

// function powerOf (x, n) {
//     // base case
//     if(n === 1){
//         return x;
//     }
//     return x * powerOf(x, n-1);
// }
// console.log(powerOf(2,3));

const myself = {
  name: "chris",
  friends: [{name: "john", friends: [{name: "max"}]}, {name: "julia"}],
};

function printNames(myself) {
	const collectedFrnds = [];

	if(!myself.friends) {
		return [];
	}

	for(const friend of myself.friends){
		collectedFrnds.push(friend.name);
	  collectedFrnds.push(...printNames(friend));
	}
	return collectedFrnds;
}

console.log(printNames(myself));