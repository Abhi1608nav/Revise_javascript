// ------------------------- Modules -----------------------------------

// Task 1 : Create a module that exports a function to add two numbers. Import and use this module in another script.

const addNumber = require("./addNumber");

let result = addNumber(12, 34);
console.log(result);

// Task 2 : Create a module that exports an object representing a person with properties and methods . Import and use this module in another script.

const personData = require("./objectPerson");
console.log(personData, personData.getDetails());

// Task 3 : Create a module that exports multiple functions using name exports . Import and use these function in another script.
const { maxOfThree, currDate, filterData } = require("./multipleFunction");
console.log(
  maxOfThree(123, 452, 43),
  filterData([1, 322, 42, 745, 12, 85, 34, -332, 136, 234, 23, 63, 136]),
  currDate()
);

// Task 4 : Create a module that exports a single function using default export . Import and use this function in another script.
const singleFunction = require("./singleFunction");
console.log(singleFunction());

// Task 5 : Create  a module that exports multiple constants and functions . Import the entire module as an object in another script and use its properties.
// ---------- Task 5 is done in Task 3 ------------------

// Task 6 : Install a third-party module (e.g., lodash) using npm . Import and use a function from this module in a script.

const lodash = require("lodash");
const arr1 = ["a", 1, 2, "4", 5, 2, 5, 6, "4", "7"];
let newArray = lodash.chunk(arr1, 1);
console.log(newArray);

// Task 7 : Install a third-party module (e.g., axios ) using npm. Import and use this module to make a network request in a script.

// First, ensure axios is installed in your project
// Run this command in your terminal if you haven't installed axios yet:
// npm install axios

const axios = require('axios');

async function getData() {
  try {
    const response = await axios.get("https://jsonplaceholder.typicode.com/users/1");
    return response;
  } catch (error) {
    console.log(error);
    return null;
  }
}

async function logData() {
  try {
    const result = await getData();
    if (result !== null) {
      console.log(result.data); // Accessing the actual data from the response
    } else {
      console.log('An error occurred');
    }
  } catch (error) {
    console.error('Error:', error);
  }
}

// Call the logData function to execute the async operations
logData();


// Task 8 : Use a module bundler like webPack or parcel to bundle multiple javascript files into a single file . Write a script to demonstrate the bundling process.
