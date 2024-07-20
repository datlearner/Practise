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
        return `${currentTime} >= 12 ? 'Good Afternoon' ${this.name}' : 'Good morning ${this.name}';
    }
}

const firstPerson = new Person('kundai', 'muchemwa');

console.log(firstPerson);

console.log(firstPerson.name);

console.log(firstPerson.age);

console.log(Person.greet);
/**
 * Class Methods:
 Add a method greet to the Person class that returns a greeting message
 using the name property. Create an instance and call the method.
 */

