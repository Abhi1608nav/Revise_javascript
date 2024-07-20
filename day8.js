// ----------------------------- ES6+ ------------------------

//Question 1 : Use template literals to create a  string that includes variable for a person's name and aage and log the string to the console.\
let name = "Abhinav";
let age = 21;

let message = `Hello I am ${name} and I am ${age} year old`;
console.log(message);


//Question 2 : Create  a multi-line string using template literals and log it to the console.

let message1 = `Hello I am Abhinav Shakya . 
I am currently pursuing the B.Tech from IIIT Bhagalpur in CSE. 
I have a CGPA of 8.04.`
console.log(message1);

// Question 3 : Use array destructuring to extract the first and second elemnets from an array of numbers and log them to the console.

let arr = [121,213,342,16,67,373,3237,3,456];
let [first,second]=arr;
console.log(first,second);

// Question 4 : Use the object destructuring to extract the name and collage name from a book object and log them to the console.
let obj1 = {
    name1: "Abhinav",
    age:21,
    collage:"IIIT Bhagalpur",
    CGPA : 8.04,
}

let {name1,collage}=obj1;
console.log(name1,collage);


// Question 5 : Use the spread operator to create a new array that includes all elements to an existing array plus additional elements, and log the new array to the console.
let arr2 = [12,42,53,7,4,845,38,456,74];
let newArr = [...arr2,4232,41,33];
console.log(arr2,newArr);
// let arr3 = [...arr2];
// let isTrue = arr2==arr3 ? true : false;
// console.log(isTrue);


// Question 6 : Use the rest operator in a function to accept an arbitary number of arguments,sum them, and return the result;
function sumOfNum(...a)
{
    let sum = 0;
    for(let i=0;i<a.length;i++)
    {
        sum+=a[i];
    }
    return sum;
}

let sum = sumOfNum(1,2,3,4,5,6);
console.log(sum);



//Question 7 : Write a function that takes two parameters and return their product , with the second parameter having a default value of 1 . Log the result of calling this function with and without the second parameter.
function productOfTwoNum(num1,num2=1) {
    return num1*num2;
}

console.log(productOfTwoNum(432));


// Question 8 : Use enhanced object literals to create an object with methods and properties, and log the object to the console.

function createObject(name,age,CGPA,collage)
{
    return {
        name,age,CGPA,collage
    }
}

let obj2 = createObject("Abhinav",21,8.04,"IIIT Bhagalpur");
let obj3 = createObject("Abhishek",20,7.94,"IIT Bhagalpur");
let obj4 = createObject("Himanshi",21,7.65,"IIT Patna");
console.log(obj2,obj3,obj4);

// Question 9 : Create an object with computed property names based on variables and log the object to the console.
function createObject(name,age,CGPA,collage)
{
    return {
        name,age,CGPA,collage
    }
}

let obj5 = createObject("Abhinav",21,8.04,"IIIT Bhagalpur");
let obj6 = createObject("Abhishek",20,7.94,"IIT Bhagalpur");
let obj7 = createObject("Himanshi",21,7.65,"IIT Patna");
console.log(obj5,obj6,obj7);