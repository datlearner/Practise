/**
 * Class Methods:
 * Define a class called Person with properties name and age.
 * Create an instance of the class and log the properties.
 */


class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
}

const firstPerson = new Person('kundai', 'muchemwa');

console.log(firstPerson);

console.log(firstPerson.name);