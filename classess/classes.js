/**
 * Create a simple class
 * Define a class called Person with properties name and age.
 * Create an instance of the class and log the properties.
 */

/**
 * Class Methods:
 Add a method greet to the Person class that returns a greeting message
 using the name property. Create an instance and call the method.
 */



class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    greet () {
        // added some methods in this class that checks time of the day eg afternoon or evening.
        let currentDay = new Date().getHours();
        if (currentDay >= 12){
            return `good afternoon ${this.name}`;
        }
        else if (currentDay < 12) {
            return `good morning ${this.name}`;
        }
    }

    yearsOld() {
        let dayy = new Date().getFullYear();
        let currentYear = 1997
        return `${this.name} is ${dayy - currentYear} years old`;
    }
}
let firstPerson = new Person('kundai', 'muchemwa');

let secondPerson = new Person('john', 'doe');

console.log(firstPerson);

console.log(firstPerson.name);

console.log(firstPerson.age);

console.log(firstPerson.greet())

console.log(secondPerson.greet());

console.log(firstPerson.yearsOld())