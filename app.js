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

const sum = (a, b) => {
    return a + b;
};

console.log(sum(5,5));

//Exercise 3: Even or Odd
//Write a function named isEven that takes a single argument num and returns true if the number is even, and false if it is odd.

const isEven = (num) => {

    if (num % 2 === 0) {
        return true;
    }
    else{
        return false;
    }
}

console.log(isEven(2));

const isEvenInput = document.getElementById('even');

const sumHeader = document.getElementById('sumHeader');

const evenbtn = document.getElementById('evenbtn');

evenbtn.addEventListener('click', () => {
    sumHeader.textContent = isEven(isEvenInput.value);
});










