// -*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*- Function  *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-

// Question 1: Write a function to check if a number is even or odd and use it to check each number in an array.
function isEvenOrNot(num1) {
    if(num1 % 2 === 0) {
        console.log(`${num1} is even number`);
    } else {
        console.log(`${num1} is odd number`);
    }
}

let arr = [1, 32, 4, 52, 3, 123, 19, -81];
arr.forEach((val) => {
    isEvenOrNot(val);
});

// Question 2: Write a function to calculate the square of a number and use it to calculate the square of each number in an array.
function squareNumber(num1) {
    return num1 ** 2;
}
arr.forEach((val) => {
    console.log(`square of ${val} is ${squareNumber(val)}`);
});

// Question 3: Write a function to find the greater of two numbers and use it to compare consecutive numbers in an array.
function greaterOfTwoNumber(num1, num2) {
    return num1 > num2 ? num1 : num2;
}

for(let i = 0; i < arr.length - 1; i++) {
    console.log(`num1 = ${arr[i]} , num2 = ${arr[i+1]} , greater number from those two is ${greaterOfTwoNumber(arr[i], arr[i+1])}`);
}

// Question 4: Write a function to concatenate two strings and demonstrate its usage.
function addingTwoString(str1, str2) {
    return str1 + str2;
}

let str1 = "Abhinav ";
let str2 = "Shakya";
console.log(`concating two string str1 = ${str1} and str2 = ${str2}  => ${addingTwoString(str1, str2)}`);

// Question 5: Write an arrow function to find the sum of two numbers and demonstrate its usage.
let sumOfTwo = (num1, num2) => {
    return num1 + num2;
}

console.log(sumOfTwo(43, 54));

// Question 6: Write an arrow function to check if a string contains a specific character and demonstrate its usage.
let isContainChar = (str, char) => {
    for(let i = 0; i < str.length; i++) {
        if(str[i] === char) {
            return true;
        }
    }
    return false;
}

console.log(isContainChar("AbhinavShakya", 'A'));

// Question 7: Write an arrow function to find the product of two numbers, with the second number having a default value, and demonstrate its usage.
let productOfTwo = (num1, num2 = 8) => {
    return num1 * num2;
}

console.log(`The product of two number is ${productOfTwo(75, 94)}`);

// Question 8: Write an arrow function that takes a name and an optional age parameter and returns a greeting message, and demonstrate its usage.
let greetingFunction = (name, age = 23) => {
    return `Hello ${name} , you have a dashing personality at the age of ${age}`;
}

console.log(greetingFunction("Abhinav", 21));

// Question 9: Write a function to print a greeting message and another function to call the greeting function a specified number of times, and demonstrate its usage.
function greet() {
    console.log("Hello Abhinav");
}

function howmanyGreeting(greetingFnc, num1) {        
    for(let i = 0; i < num1; i++) {
        greet();
    }
}

howmanyGreeting(greet, 4);

// Question 10: Write two functions that return numbers, and another function that takes these functions and a value as arguments, applies the functions to the value, and returns the result.
function f1() {
    return 10;
}

function f2() {
    return 20;
}

function applyingFunction(f1, f2, val) {
    val = f1() + val;
    val += f2();
    return val;
}

console.log(applyingFunction(f1, f2, 5));
