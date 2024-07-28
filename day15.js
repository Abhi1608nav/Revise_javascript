// --------------------- Clousers ----------------

// Task 1 : Write a function that return another function, where the inner function accesses a variable from the outer function's scope . Call the inner function and log the result.

function enterYourName(name)
{
     return function greeting()
      {
          return `Hello ${name}`;
      }
}

let newFucntion = enterYourName("Abhinav");

console.log(newFucntion());

/*
Closure: Understanding closures is crucial here. A closure gives you access to an outer function’s scope from an inner function. In JavaScript, closures are created every time a function is created, at function creation time.
Scope: The inner function has access to the outer function’s variables and parameters because it is defined inside the outer function.
*/


// Task 2 : Create a closure that maintains a private counter . Implement functions to increment and get the current value of the counter.


function privateData()
{
     let privateData = 0;
     
     return {
         increment : function(){
            privateData ++;
         },
         currentValue : function()
         {
            return privateData;
         }
     }
}

let myCounter = privateData();

myCounter.increment();
console.log(myCounter.currentValue());
myCounter.increment();
console.log(myCounter.currentValue());


// Task 3 : Write a function that generates unique IDs. Use a closure to keep track of the last generated ID and increment it with each call.

function generateUIDs()
{
    let newID = Math.floor(Math.random()*21386329);
    return {
        increment : function()
        {
             ++newID ;
        },
        getNewID : function()
        {    this.increment();
            return newID;
        }
    }
}

let newArr = new Array();

let mynewId = generateUIDs();
for(let i = 0; i<21;i++)
{    newArr[i]=mynewId.getNewID();

}

newArr.forEach((val)=>{
    console.log(val);
})


// Task 4 : Create a closure that captures a user's name and returns a function that greets the user by name.
// Complete this task in TASK 1 .


// Task 5 : Write a loop that creates an array of functions. Each function should log its index when called. Use a closure to ensure each function loda the correct index.

let arrFunction = [];

for(let i=0;i<10;i++)
{
    const func = () =>{
        console.log(i);
    }

    arrFunction.push(func);
}


arrFunction.forEach((func,index)=>{
    func();
})

// Task 6 : Use closures to create a simple module for managing a collection of items. Implemenet methods to add, remove and list items.// Define the module function

function itemManager()
{
     let items = [];

     return {

        addItem: function (item){
            items.push(item);
        },

        removeItem : function(index)
        {
            if(index>=0 && index<items.length){
                items.splice(index,1);
            }else{
                console.error("Index out of bounds");
            }
        },

        listItems: function()
        {
            return [...items];
        }
     }
}


const myItems = itemManager();

myItems.addItem("Apple");
myItems.addItem("Banana");
myItems.addItem("pineApple");
myItems.addItem("Blueberry");
console.log(myItems.listItems());
myItems.removeItem(2);
console.log(myItems.listItems());


// Task 7 : Write a function that memoizes the results of another function. Use a clouser to store the results of previous computations.

function memoize(func) {
    const cache = {}; 
    return function(...args) {
      const key = JSON.stringify(args);
  
      if (!cache[key]) {
        cache[key] = func.apply(this, args);
      }
  
      return cache[key];
    };
  }
  
 
  const fibonacci = (n) => {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
  };
  
  const memoizedFibonacci = memoize(fibonacci);
  
  console.log(memoizedFibonacci(10)); 


// Task 8 : Create a memoized version of a function that calculates the calculates the factorial of a number.
function memoizeFactorial() {
    const cache = {}; // Initialize cache object
  
    // Define the factorial function
    function factorial(n) {
      // Base case
      if (n <= 1) return 1;
  
      // Check if the result is already cached
      if (cache[n]) {
        return cache[n];
      }
  
      // Calculate factorial and store in cache
      cache[n] = n * factorial(n - 1);
      return cache[n];
    }
  
    return factorial; // Return the memoized factorial function
  }
  
  // Create a memoized factorial function
  const memoizedFactorial = memoizeFactorial();
  
  console.log(memoizedFactorial(5)); // Should compute and log 120
  console.log(memoizedFactorial(7)); // Should compute and log 5040 efficiently
  