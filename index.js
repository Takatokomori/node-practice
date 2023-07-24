const Person = require('./person');

const person1 = new Person('Josh, Ming', 44);
const person2 = new Person('Bobby Gu', 33);

console.log(person1);
console.log(person2);
person2.greeting();