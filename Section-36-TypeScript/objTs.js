// OBJECT TYPES in TS
var num1Input = document.getElementById("num1"); // use the keyword as (for DOM inference)
var num2Input = document.getElementById("num1"); // <> syntax instead of 'as' can be used too
var btn = document.querySelector("button");
// rslts is an array and the data types in the array will be objects of that structure (structure that the object has);
// it also has a print method which holds a function, which takes in no args and has no return type (as specified by the type:void);
var rslts = [];
// const names: string[] = []; TYPE OF DATA TYPES FOR THE ARRAY
function add(a, b) {
    return a + b;
}
function printResult(addedResult) {
    console.log(addedResult);
}
btn.addEventListener("click", function () {
    var num1 = +num1Input.value;
    var num2 = +num2Input.value;
    var res = add(num1, num2);
    // Type is infered by TS automatically for the object, hence its redundant to add { key : type };
    // const resObj = {
    // 	result: res
    // };
    var resObj = {
        result: res,
        print: function () {
            console.log(this.result);
        },
    };
    rslts.push(resObj);
    // rslts.push(5); !! shows error due to how our array is set up
    printResult(rslts);
    rslts[0].print();
});
