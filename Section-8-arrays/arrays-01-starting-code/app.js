const numbers = [1, 3, 4];
console.log(numbers);

const moreNumbers = new Array("hi", "Two");
console.log(moreNumbers);

const anotherArray = Array.from("hi!");
console.log(anotherArray);

const hobbies = ["sports", "guitar", "Games"];
hobbies.splice(1, 0, "swimming");
console.log(hobbies);
const removedHobbies = hobbies.splice(1, 2);
console.log(hobbies);
console.log(removedHobbies);

const testResults = [1, 5.3, 1.5, 10.99, -5, 10];
const storedResults = testResults.slice(0,2); // creates a copy of the old array and returns a new array (diff address/memory location)
const anotherResult = testResults.slice(-3, -1);
const concatedArray = testResults.concat([2]);

console.log(testResults);
console.log(storedResults);
console.log(anotherResult);
console.log(concatedArray);
console.log(testResults.includes(10.99));
console.log(testResults.indexOf(10.99) !== -1);
console.log(testResults.indexOf(10.99));

// ------------OBJECT ARRAY---------------
// for refrence Values (can be used for prim vals too)
const personData = [ {personName: "Max"},{personName: "John"} ];

// find() method
/* returns the same object in the array.
John.personName = 'Anna'; working with the same reference value */
const foundJohn = personData.find((person, idx, persons) => {
    return person.personName === 'John';
});

// findIndex() method; returns the index of that reference value
const indexOfMax = personData.findIndex((person, idx, persons) => {
    return person.personName === 'Max';
});
console.log(foundJohn);
console.log(indexOfMax);
console.log(personData);

// -------------forEach() Method----------------
const prices = [10.99, 5.99, 6.99, 8, 49, 6.59];
prices.splice(1,1);
console.log(prices);
const tax = 0.19;
const taxAdjustedPrices = [];
for(const price of prices){
    taxAdjustedPrices.push(price * (1 + tax));
}
prices.forEach((price, idx, prices) => {
    const priceObj = {
        index : idx,
        originalPrice : price,
        taxAdjPrice : price * (1 + tax),
    };
    taxAdjustedPrices.push(priceObj);
});
console.log(taxAdjustedPrices);

// ----------Map() Method-----------
/* returns a new array with the mapped values (transformed elements) from the existing array.
original array stays untouched */
const newPrices = prices.map((price, idx, prices) => {
  const priceObj = {
    index: idx,
    adjustedPrices: price * (1 + tax),
  };
  return priceObj;
});
console.log(newPrices);

// --------sorting and reversing methods-----------
const sortedPrices = prices.sort((a, b) => a - b);
console.log(sortedPrices);

console.log(sortedPrices.reverse());

// -------- filter()----------
const filteredPrices = prices.filter((price,idx, prices) => {
    return price >= 8; // returns true for the follwing condition and keeps those values. false/dropped otherwise.
});
console.log(filteredPrices);

// -------reduce()------------
// Example to get sum of array
// let sum = 0;
// prices.forEach((price) => {sum += price});

const reducedPrices = prices.reduce((prevVal, currVal, idx, prices) => {
    return prevVal + currVal;
}, 0);

// // ==============chaining================
const newPricesArray = [{price: 10.99}, {price: 5.99}, {price: 29.99}];
const sum = newPricesArray.map(obj => obj.price).reduce((prevVal, currVal) => prevVal + currVal, 0);
console.log(sum);

// ----------------split() and join() for string array methods------------------
const data = "new York;10.99;2000";
const transformedData = data.split(';');
console.log(transformedData);
const newTransData = transformedData.map((val) => {
  const int = parseFloat(val);
  if (isNaN(int)) {
    return val;
  } else {
    return int;
  }
});
console.log(newTransData);

const nameFragments = 'Schwarz';
const newFrags = [...nameFragments];
console.log(newFrags);
// EXAMPLE OF SPREAD ... OPERATOR AND JOIN METHOD. 
// using spread instead of split. 
const mergeName = [...nameFragments].reverse().join('');
console.log(mergeName);


// const  personsObj = [{name: 'MAX', age: 30}, {name:'John', age:40}];
// // newly created OBJECTS. clarification in notebook in spread operator. 
const copiedPerson = [...personsObj.map(pprsn => ({
    name: pprsn.name,
    age: pprsn.age,
}))];
console.log(copiedPerson);

// ---------ARRAY DESTRUCTURING-----------
const nameData = ['Max','Schwarz'];
// const firstName = nameData[0];
// const lastName = nameData[1];
// OR
// DESTRUCTURE
const [firstName, lastName] = nameData;
console.log(firstName, lastName);
// now we can also collect other info by using the REST operator
// eg:-
const newDataArray = ['john', 'max', 'male', 30];
const [nameFirst, nameLast, ...otherInfo] = newDataArray;
console.log(otherInfo);
