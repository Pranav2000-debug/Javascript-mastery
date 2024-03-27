// // ----------------- SETS------------------
// const ids = new Set([1,2,3]);
// ids.add(5);
// console.log(ids.has(1));

// for(const entry of ids.entries()){
//     console.log(entry);
// }

// --------------------MAPS--------------------
const person1 = {name:'Max'};
const person2 = {name: 'Maneul'};

// SET EXAMPLE USING OBJECTS AS SET DATA
// const objSet = new Set([person1, person2, 'string']);
// for(const ent of objSet.entries()){
//     console.log(ent);
// }
// console.log(objSet.has(person1));

// -------------MAPS--------------
const personData = new Map([[person1, [{date: '24th', price: 20}]]]);
console.log(personData);
console.log(personData.get(person1));
personData.set(person2, [{date: '29th', price: 1000}]);
console.log(personData);

// first way to loop
for(const [key,value] of personData.entries()){
    console.log(key, value);
}
// 2nd way to loop for keys.
// alternatively, we can use .values() for the values.
for(const key of personData.keys()){
    console.log(key);
}

console.log(personData.has(person1));