// ----------------------ADVANCED TYPES (Literal types, Union types, Enums)----------------------
// SIMPLIFYING TYPE LOGICS FOR OBJECTS AND ARRAYS by using 'TYPE ALIAS' by using the KEYWORD: type (known only to TS)
var num1Input = document.getElementById("num1");
var num2Input = document.getElementById("num1");
var btn = document.querySelector("button");
// Can use our type that we made here
// const rslts: { result: number, print: () => void }[] = [];
var rslts = [];
// EXAMPLE OF ENUMS. creates an list or array of choices you can use in your code.
var OutputMode;
(function (OutputMode) {
    OutputMode[OutputMode["CONSOLE"] = 0] = "CONSOLE";
    OutputMode[OutputMode["ALERT"] = 1] = "ALERT";
})(OutputMode || (OutputMode = {}));
function add(a, b) {
    return a + b;
}
// EXAMPLE OF USING "LITERAL TYPE" (instead of giving our 2nd arg type string, we can literally give our value in that type )
// AND TOGETHER WITH THE pipe symbol '|' we have also created a UNION TYPE ( multiple types of values are allowed, in this case for this parameter)
// One advantage could also be better autocompletion. (SEE LINE 45);
// Can also convert this printMode to our own type alias. type PrintMode: 'console' | 'alert'
function printResult(addedResult, printMode) {
    // WITH ENUM CHOICES
    /*
  function printResult(addedResult: any, printMode: OutputMode): void {
     if (printMode === OutputMode.CONSOLE) {
      console.log(addedResult);
    } else if (printMode === OutputMode.ALERT) {
      alert(addedResult);
    }
  }
  */
    // WITH LITERAL TYPE
    if (printMode === "console") {
        console.log(addedResult);
    }
    else if (printMode === "alert") {
        alert(addedResult);
    }
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
    printResult(rslts, "console");
    rslts[0].print();
});
