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

    num = Number(num); // Convert input to a number
    if (isNaN(num)) { // Check if the input is a valid number
        return "Please enter a valid number.";
    }

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


//Exercise 4: Find the Largest Number
//Write a function named max that takes three arguments a, b, and c and returns the largest of the three numbers.

const max = (a, b, c) => {
    return Math.max(a, b, c);
}
console.log(max(33, 2, 200));

// returns a minimum number

const maxExercise = (a, b, c,...d) => {
    return Math.min(a, b, c, d);
}

console.log(maxExercise(10, 20, 30, 40));

//Exercise 5: Factorial
//Write a function named factorial that takes a single argument n and returns the factorial of n (i.e., n!).

const factorial = (n) => {
    if (n < 0) {
        return "Factorial is not defined for negative numbers";
    }
    let result = 1;
    for (let i = 1; i <= n; i++) {
        result *= i;
    }
    return result;
};

console.log(factorial(5));
console.log(factorial(10));
console.log(factorial(15));

// recursive approach
/*

*/







