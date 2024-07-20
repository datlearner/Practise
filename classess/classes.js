/**
 * Create a simple class
 * Define a class called Person with properties name and age.
 * Create an instance of the class and log the properties.
 */

let currentTime = new Date();

class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    greet () {
        return `How are you ${this.name}`;
    }
}

const firstPerson = new Person('kundai', 'muchemwa');

console.log(firstPerson);

console.log(firstPerson.name);

console.log(firstPerson.age);

console.log(firstPerson.greet)

/**
 * Class Methods:
 Add a method greet to the Person class that returns a greeting message
 using the name property. Create an instance and call the method.
 */

