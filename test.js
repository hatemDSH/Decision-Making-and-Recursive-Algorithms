
// Leap Year Checker
// Task: Create a function that takes a year as input and determines whether it is a leap year or not.

// just View 
console.log(" * isLeapYear ?? *" ) 

function isLeapYear(year) {
    if (year % 4 === 0) {
        if (year % 100 === 0) {
            if (year % 400 === 0) {
                return true;
            } else {
                return false;
            }
        } else {
            return true;
        }
    } else {
        return false;
    }
}

// Test the function
const testYears = [2000, 2020, 2100, 2200, 2300, 2400];
testYears.forEach(year => {
    console.log(`${year} is a leap year: ${isLeapYear(year)}`);
});



// Ticket Pricing
// Task: Write a program that prompts the user to enter their age and then 
// determines the price of a movie ticket based on the given criteria.

console.log(" *getTicketPrice * ");


function getTicketPrice(age) {
    if (age <= 12) {
        return 10;
    } else if (age >= 13 && age <= 17) {
        return 15;
    } else {
        return 20;
    }
}

// Test the function
const testAges = [8, 15, 25, 12, 13, 17, 18];
testAges.forEach(age => {
    console.log(`Age ${age}: Ticket price $${getTicketPrice(age)}`);
});

// Recursion
// Fibonacci Sequence
// Task: Implement a recursive function to generate the nth Fibonacci number.

console.log( " **  fibonacci  **");
function fibonacci(n) {
    if (n <= 1) {
        return n;
    } else {
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
}

// Test the function
for (let i = 0; i < 10; i++) {
    console.log(`F(${i}) = ${fibonacci(i)}`);
}


//  Palindrome Checker
// Task: Create a recursive function to check if a given string is a palindrome.
console.log( "  ** isPalindrome ** ");

function isPalindrome(s) {
    // Remove non-alphanumeric characters and convert to lowercase
    s = s.toLowerCase().replace(/[^a-z0-9]/g, '');
    
    if (s.length <= 1) {
        return true;
    } else if (s[0] !== s[s.length - 1]) {
        return false;
    } else {
        return isPalindrome(s.slice(1, -1));
    }
}

// Test the function
const testStrings = ["A man, a plan, a canal: Panama", "race a car", "hello", "Madam, I'm Adam"];
testStrings.forEach(string => {
    console.log(`'${string}' is a palindrome: ${isPalindrome(string)}`);
});