//Exercise 1: Simple Function
//Write a function named greet that takes a single argument name and returns a greeting message.


function simpleGreeting(name) {
    return 'Welcome ' + name;
};

console.log(simpleGreeting('kundai'))

const simpleHead = document.getElementById('simpleHeader');

const lname = document.getElementById('lname');

const userDetails = document.getElementById('userDetails');

userDetails.addEventListener('click', () => {
    simpleHead.textContent =   `Welcome ${lname.value}`;
});

// Exercise 2: Sum of Two Numbers
//Write a function named sum that takes two arguments a and b and returns their sum.

