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
In the recursive approach, the function calls itself with the value n-1 until it reaches 0 or 1.
*/

const factoriall = (n) => {
    if (n < 0) {
        return "Factorial is not defined for negative numbers";
    } else if (n === 0 || n === 1) {
        return 1;
    } else {
        return n * factoriall(n - 1);
    }
}

console.log(factoriall(5));
console.log(factoriall(0));
console.log(factoriall(-3)); //negative numbers;

//Exercise 6: Array Sum
//Write a function named arraySum that takes an array of numbers as an argument and returns the sum of all the numbers in the array.

//Exercise 7: Palindrome
//Write a function named isPalindrome that takes a single argument str and returns true if the string is a palindrome (reads the same backward as forward), and false otherwise.

const isPalindrome = (str) => {
    
        const cleanedStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    
        const reversedStr = cleanedStr.split('').reverse().join('');

        return cleanedStr === reversedStr;
    
}

console.log(isPalindrome('madam')); // true
console.log(isPalindrome('racecar')); //true
console.log(isPalindrome('hello')); // false
console.log('kundai');

//Exercise 8: FizzBuzz
//Write a function named fizzBuzz that takes a single argument n and returns an array of numbers from 1 to n, but for multiples of three, it should add "Fizz" instead of the number and for multiples of five, it should add "Buzz". For numbers which are multiples of both three and five, it should add "FizzBuzz".

const fizzBuzz = (n) => {
    const result = [];

    for (let i = 1; i <= n; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            result.push("FizzBuzz");
        } else if (i % 3 === 0) {
            result.push("Fizz");
        } else if (i % 5 === 0) {
            result.push("Buzz");
        } else {
            result.push(i);
        }
    }

    return result;
}

console.log(fizzBuzz(10));

//Exercise 9: Reverse a String
//Write a function named reverseString that takes a single argument str and returns the string reversed.

const reverseString = (str) => {
    return str.split('').reverse().join('');
};


console.log(reverseString('kundai'));
console.log(reverseString('javascript'));

let fruit = 'kundai';

console.log(fruit.split(' ').reverse().join());

//Exercise 10: Count Vowels
//Write a function named countVowels that takes a single argument str and returns the number of vowels in the string.

const countVowels = (str) => {
    return str.length;
}

console.log(countVowels('kundai'))



















