// -*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*- Arrays  *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-

//Question 1 : Create an array of numbers from 1 to 5 and log the array to the console.

const arr = [1, 2, 3, 4, 5];
console.log(arr);

//Question 2 : Access the first and last element of the array and log the them to the console.

let arr1 = [11, 3, 2, 4, 2, 6, 3, 23, 4, 234, 657, 23, 25, 7, 343, 2];
console.log(arr1[0], arr1[arr1.length - 1]);

//Question 3 : Use the push method to add a new number in to end of the array and log the updated array

arr1.push(32);
console.log(arr1);

// Question 4 : Use the pop method to remove the last element from the array and log the updated array;
arr1.pop();
console.log(arr1);

// Question 5 : Use the shift method to remove the first element from the array and log the updated array
arr1.shift();
console.log(arr1);

// Question 6 : Use the unshift method to add new number to the beginning of the array and log the updated array
arr1.unshift(34);
console.log(arr1);

// Question 7 : Use the map method to create a new array where each number is double and log the new array.
let newarr = arr1.map((num) => {
  return num * 2;
});
console.log(arr1, newarr);

//Question 8 : Use the filter method  to create a new array with only even numbers and log the new array

let newarr1 = arr1.filter((val) => {
  if (val % 2 === 0) {
    return val;
  }
});

console.log(newarr1);

// Question 9 : Use the reduce method to calculte the sum of all numbers in the array and log the result.

let ans = arr1.reduce((sum, arrVal) => {
  return sum + arrVal;
}, 0);

console.log(ans);

// Question 10 : Use a for loop to iterate over the array and log each element to the console.
for (let i = 0; i < arr1.length; i++) {
  console.log(arr1[i]);
}

// Question 11 : Use the forEach method to iterate over the array and log each element to the console.
newarr1.forEach((val) => {
  console.log(val);
});

// Question 12 : Create a two dimensional array (matrix) and log the entire array to the console.
let _2DArray = [
  [
    Math.floor(Math.random() * 10000),
    Math.floor(Math.random() * 10000),
    Math.floor(Math.random() * 10000),
    Math.floor(Math.random() * 10000),
  ],
  [
    Math.floor(Math.random() * 10000),
    Math.floor(Math.random() * 10000),
    Math.floor(Math.random() * 10000),
    Math.floor(Math.random() * 10000),
  ],
  [
    Math.floor(Math.random() * 10000),
    Math.floor(Math.random() * 10000),
    Math.floor(Math.random() * 10000),
    Math.floor(Math.random() * 10000),
  ],
  [
    Math.floor(Math.random() * 10000),
    Math.floor(Math.random() * 10000),
    Math.floor(Math.random() * 10000),
    Math.floor(Math.random() * 10000),
  ],
];

console.log(_2DArray);

// Question 13 : Access and log a specific element from the 2-D array;

for (let i = 0; i < _2DArray.length; i++) {
  for (let j = 0; j < _2DArray[i].length; j++) {
    console.log(_2DArray[i][j]);
  }
}
