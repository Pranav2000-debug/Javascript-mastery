// here the ID for the DOM element could be anything and TS doesn't know what we are getting here, rather it is of type HTMLElement. Hence we do something called typecasting. (overwritting TS inference)
const num1Input = document.getElementById('num1') as HTMLInputElement; // use the keyword as (for DOM inference)
const num2Input = <HTMLInputElement>document.getElementById('num1'); // <> syntax instead of 'as' can be used too
const btn = document.querySelector('button');

// TYPES:- numbers, strings, booleans

function add(a: number, b: number) {
  return a + b; // TS infers that the return type of this fn is 'number' since we add a and b which are of type number
}
const result = add(5, 3); // infered here, no need to reassign a type here, ex: const result:number = ...
console.log(result);
// const isDone = false; //  TS infers that its a boolean.
/* console.log(add('5','5')); */

// FUNCTION TYPES:- type of the function as a whole.
// function fn (x,y):type {...}
// Functions with no return type: -

// we can also get rid of 'void' since TS infers that since there is no return, function type is void
function printResult(result: number): void { 
    console.log(result); // no return type, function returns type 'void'.
}
// we can use 'undefined' too but unlike JS where a function returns 'undefined' if it returns nothing, in TS we have to return 'undefined' with type 'undefined'. Else use 'void' to specify the return type.


btn?.addEventListener('click', () => {
    // we get errors here bcz TS doesn't know what we are getting from the DOM, the value of which is stored in num1 could be of type 'any' and is passed to the add func which expects a type of 'number. [Property 'value' does not exist on type 'HTMLElement']
    const num1 = +num1Input.value; 
    const num2 = +num2Input.value;
    const res = add(num1 ,num2);
    printResult(res);
})