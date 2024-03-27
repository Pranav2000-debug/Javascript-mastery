const person1 = {name:'Max'};
const person2 = {name: 'Maneul'};

const personData = new Map();
personData.set(person1, [{age:31}]);
personData.set(person2, [{age:31}]);

const p1 = personData.get(person1);
console.log(p1);
p1[0].age = 32;
console.log(p1);

// for(const [key, value] of personData.entries()){
//     console.log(key.name +': '+ value[0].age);
// }

// console.log(personData.entries());
// console.log(personData);