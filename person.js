class Person {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    greeting(){
        console.log(`My name is ${this.name}. and I'm ${this.age} years old`);
    }
}

// module.exports = Person;

const person1 = new Person('Josh, Ming', 44);
const person2 = new Person('Bobby Gu', 33);

console.log(person1);
console.log(person2);
person2.greeting();