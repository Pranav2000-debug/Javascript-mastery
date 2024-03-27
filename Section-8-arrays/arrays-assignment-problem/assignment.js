const numArray = [2, 23, 5, 4, 32, 10, 11, 3];
// filter
const newNumArray = numArray.filter(item => item > 5);
console.log(newNumArray);
// map
const mappedArray = numArray.map((item) => {
    const objNum = {
        num: item
    };
    return objNum;
});
console.log(mappedArray);
// reduce
const product = numArray.reduce((prevVal, currVal) => {
    return prevVal * currVal;
},1);
console.log(product);

// ===============Q2=================

function findMin(...nums) {
  let currMax = nums[0];
  for (const num of nums) {
    if (currMax < num) {
      currMax = num;
    }
  }
  return currMax;
}
console.log(findMin(...numArray)); // spread operator, when calling a func or when using it like = [...nums];

// ===============Q3=================

function findMinMax(...nums) {
    let currMax = nums[0];
    let currMin = nums[0];
    for (const num of nums) {
      if (currMax < num) {
        currMax = num;
      }
      if(currMin > num){
        currMin = num;
      }
    }
    return [currMax, currMin];
  }
console.log(typeof(findMinMax(...numArray)));
const [maximum, minimum] = findMinMax(...numArray);
console.log(`Maximum is : ${maximum}`);
console.log(`Minimum is : ${minimum}`);

// ===============Q4=================
const ids = new Set();
ids.add(1);
ids.add(3);
ids.add(3);
ids.add(4);
console.log(ids);