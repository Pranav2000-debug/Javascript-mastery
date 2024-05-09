// OBJECT TYPES in TS

const num1Input = document.getElementById("num1") as HTMLInputElement; // use the keyword as (for DOM inference)
const num2Input = <HTMLInputElement>document.getElementById("num1"); // <> syntax instead of 'as' can be used too
const btn = document.querySelector("button") as HTMLButtonElement;

// rslts is an array and the data types in the array will be objects of that structure (structure that the object has);
// it also has a print method which holds a function, which takes in no args and has no return type (as specified by the type:void);
const rslts: { result: number, print: () => void }[] = [];
// const names: string[] = []; TYPE OF DATA TYPES FOR THE ARRAY

function add(a: number, b: number) {
  return a + b;
}
function printResult(addedResult: any): void {
  console.log(addedResult);
}
btn.addEventListener("click", () => {
  const num1 = +num1Input.value;
  const num2 = +num2Input.value;
  const res = add(num1, num2);
  // Type is infered by TS automatically for the object, hence its redundant to add { key : type };
  // const resObj = {
  // 	result: res
  // };
  const resObj: { result: number, print: () => void } = {
    result: res,
    print() {
      console.log(this.result);
    },
  };

  rslts.push(resObj);
  // rslts.push(5); !! shows error due to how our array is set up
  printResult(rslts);
	rslts[0].print();
});
