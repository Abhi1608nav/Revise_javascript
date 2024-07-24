// --------------------------------- Error Handling ------------------------------------------

// Task 1 : Write a function that intentionally throws an error and use a try-catch block to handle the error and log an appropriate message to the console.

const dataFunction = ()=>{
    try {
           throw Error ("There is some logical error in your code ");
    } catch (error) {
        
        console.log({message : error.message});
    }
}
dataFunction();


// Task 2 : Create a function that divides two numbers and throws an error if the denominator is zero. Use try-catch block to handle this error.
function divideNumber(numenator,denominator){
    try {

        if(denominator === 0)
        {
            throw Error(" denominator cannot be zero .");
        }

         return numenator/denominator;
        
    } catch (error) {
        
        return error.message;

    }
}

console.log(divideNumber(210,12));


// Task 3 : Write a script that includes a try-catch block and a finally block . Log messages in the try , catch, and finally blocks to observe the execution flow.

function tryCatchFinally ()
{
    try {

        console.log("Hi I am inside the try block");
        throw Error("Hi there is a error")
    } catch (error) {
        
        console.log("Hi I am inside the catch block");

    }finally
    {
          console.log("Hi I am inside the finally block");
    }
}
tryCatchFinally();


// Task 4 : Create a custom error class that extends the built-in Error class. Throw an instance of this custom error in a function and handle it using a try-catch block

class CustomError extends Error{
    constructor(message,name)
    {
        super(message);
        this._name = name;
    }

    displayError(){
        console.log(`${this._name} : ${this.message}`);
    }
}


const randomError= ()=>{
    try {
        
        throw new CustomError("There is some error occured while connecting to the dataBase","customError");
        

    } catch (error) {
        // console.log({error:error.message});
        if(error instanceof CustomError)
        {
            error.displayError();
        }
        else{
            console.log({message : error.message})
        }
    }
}

randomError();

// class DatabaseError extends Error {
//     constructor(message) {
//         super(message);
//         this.name = 'DatabaseError';
//     }

//     displayError() {
//         console.error(`${this.name}: ${this.message}`);
//     }
// }

// class ConnectionError extends DatabaseError {
//     constructor(message) {
//         super(message);
//         this.name = 'ConnectionError';
//     }
// }

// class QueryError extends DatabaseError {
//     constructor(message) {
//         super(message);
//         this.name = 'QueryError';
//     }
// }

// const connectToDatabase = () => {
//     // Simulate a random error
//     const random = Math.random();

//     if (random < 0.3) {
//         throw new ConnectionError("Failed to connect to the database.");
//     } else if (random < 0.6) {
//         throw new QueryError("Error executing the database query.");
//     } else {
//         console.log("Connected to the database successfully.");
//     }
// };


// const runDatabaseOperation = () => {
//     try {
//         connectToDatabase();
//         // Additional operations can be performed here if needed
//     } catch (error) {
//         if (error instanceof DatabaseError) {
//             error.displayError();
//         } else {
//             console.error("An unexpected error occurred:", error);
//         }
//     }
// };

// runDatabaseOperation();


// Task 5 : Write a function that validates user input (e.g., checking if a string is not empty) and throws a custom error if the validation fails. Handles the custom error using a try-catch bock

class NotAValidateData extends Error{
    constructor(message,name)
    {
        super(message);
        this._name = name;
    }

    displayError()
    {
        console.log(`${this._name} : ${this.message}`);
    }
}


const validateData = (email)=>{
    try {
           let regexMatchingPatter = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.(com|in|outlook)$/;
           let isValidEmail = regexMatchingPatter.test(email);
           if(!isValidEmail)
           {
               throw new NotAValidateData("The entered email is not a valid email","EmailError");

           }
           console.log("Your entered email is valid");
    } catch (error) {
        
        if(error instanceof NotAValidateData)
        {
            error.displayError();
        }
        else{
            console.log({errorMessage:error.message});
        }

    }
}


let emailData = ["test@example.com","user.name@domain.in","contact@company.outlook","invalid@domain.co","user@domain.out"];
for(let i = 0;i<emailData.length ; i++)
{
    validateData(emailData[i]);
}



// Task 6 : Create a promise that randomly resolves or rejects . Use .catch() to handle the rejection and log an appropriate message to the console.

let mypromise = new Promise ((resolve,reject)=>{
    let number = Math.floor(Math.random()*2131234);
    if(number%2 == 0)
    {
        resolve("Hey this is a even number");
    }else{
        reject("Hey this is not a even number");
    }
})

mypromise.then((message)=>{
    console.log(message);
}).catch((error)=>{
    console.log({errorMessage:error});
})



// Task 7 : Use a try-catch within an async function to handle errors from a promise that randomly resolves or rejects , and log the error message.

 const customFucntion = async()=>{
    try {
        
        let myPromise = new Promise ((resolve,reject)=>{
            let myLuck = Math.floor(Math.random()*1230965);
            if(myLuck&1)
            {
                setTimeout(()=>{
                      resolve("you are inside a roslve function");
                },4000);
            }
            else{
                setTimeout(()=>{
                    reject("you are inside a reject function");
              },4000);
            }
        })

        let result =  await myPromise;
        return result;

    } catch (error) {
        
        /// console.log({errorMessage : error});
        throw error;
    }
 }

 customFucntion().then((message)=>{
    console.log(message);
 }).catch((error)=>{
    console.log({errorMessage : error})
 });


 // Task 8 : Use the fetch API to request data from an invalid URL and handle the error using .catch(). Log an appropriate error message to the console.

 function fetchData()
 {
      let URL = "https://xkcd.com/info.0.json";
      return fetch(URL).then((response)=>{
             if(!response.ok)
             {
                throw Error(`The cause of error is not identifiable ${response.status}`)
             }

             return response.json();
      }).then((data)=>{
           return data;
      }).catch((error)=>{
        throw error;
      });
 }


 fetchData().then((data)=>{
    console.log(data);
 }).catch((error)=>{
    console.log({errorMessage : error.message})
 })



// Task 9 : Use the fetch API to request data from an invalid URL within an async function and handle the error using try-catch. Log an appropriate error message.
let fetchDataAsync = async()=>{
    try {
      let URL = "https://xcd.com/info.0.json";
      let response = await fetch(URL);
      if(!response.ok)
      {
         throw Error ("Failed to fetch data: " + response.status + " " + response.statusText);
      }
      let data = await response.json();
      return data;
    } catch (error) {
         
        console.log({errorMessage  : error.message});
        
    }
}

setTimeout(async()=>{
    let data = await fetchDataAsync();
    console.log(data);
},10000);