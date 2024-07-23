// ----------------------------------- Question Related to Promises and async/Await ------------------------------------

// Task 1 : Create a promise that resolves with a message after a 2 second timeOut and log the message on the console.

let promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Your promise is resolved");
  }, 10000);
});

promise
  .then((message) => {
    console.log(message);
  })
  .catch((error) => {
    console.log(error.message);
  });

// Task 2 : Create a promise that rejects with an error message after 2 second timeout and handle the error using .catch();

let promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("An unexpected error occured from the server .");
  }, 8000);
});

promise2
  .then((message) => {
    console.log(message);
  })
  .catch((error) => {
    console.log(error);
  });

// Task 3 : Create a sequence of promises that simulate fetching data from a server . Chain the promises to log messages in specific order;

function connectToServer() {
  console.log("Connected to server");
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Fetching Data from server");
    }, 2000);
  });
}

let dataofBook = [
  "History part1",
  "THE TAJ MAHAL",
  " SUCIDAL THOUGHTS",
  "LOVE IS PAINFULL",
];

function FetchingBooksData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(dataofBook);
    }, 3000);
  });
}

connectToServer()
  .then((message) => {
    console.log(message);
    return FetchingBooksData();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });


// Task 4 : Write a async function that waits for a promise to resolve and then logs the resolved value.

async function promiseData()
{
     return await new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Hey How are you");
        },6000)
     })
}


promiseData().then((message)=>{
    console.log(message);
})


// Task 5 : Write an async function that handles a rejected promise using try-catch and logs the error message.

async function PromiseData1()
{
     try {
            let data = await new Promise((resolve,reject)=>{
                setTimeout(()=>{
                    reject("Some Error occured ");
                },4676)
            })
            //  console.log("rejecting the thing")
            return data;
     } catch (error) {
        //  console.log("error")
        return {error};

     }
}

PromiseData1().then((message)=>{
     console.log(message);
}).catch((error)=>{
    console.log(error);
})

// Task 6 : Use fetch Api to get data from apublic API and log the response data to the console using promises.

async function GetingObjects(){
    try {
        let URL = "https://api.restful-api.dev/objects";
        let data = await fetch(URL);
        let responseData = await data.json();
        return responseData
    } catch (error) {
        console.log({error});
    }
}

GetingObjects().then((data)=>
{
    console.log(data);
});


// Task 7 : Use the fetch API to get data from a public API and log the response data to the console using Promises;

function GetingObjects2()
{
    let URL = "https://api.restful-api.dev/objects";
    
    return fetch(URL).then((response)=>{
        if(!response.ok)
        {
            throw Error ("SomeThing went wrong");
        }
        

        return response.json();
    }).then(data=>{
        return data;
    }).catch(error=>{
        console.log({error});
    })
};

GetingObjects2().then((Data)=>{
    console.log(Data);
}).catch((error)=>{
    console.log(error);
})


// Task 8 : Use Promise.all to wait for multiple promise to resolve and then log all their values.

function createMultiplePromise()
{
    let data  = [];
    for(let i = 0;i<10;i++)
    {  
        let delay = Math.floor(Math.random()*10000);
       data[i] =  new Promise((resolve,reject)=>{
            setTimeout(()=>{
                resolve(`${"Hello world " + delay + 'ms'}`);
            },delay);
        })
    }

    return data;

}

let data = createMultiplePromise();
Promise.all(data)
.then((results) => {
    console.log("All promises resolved:");
    results.forEach(result => {
        console.log(result);
    });
})
.catch((error) => {
    console.log("One or more promises rejected:", error);
});


/**
  
The reason the results are not coming in sorted order based on the delay is that Promise.all returns the results in the same order as the promises were passed to it, not in the order they resolve. Each promise in the array returned by createMultiplePromise is resolved independently, and Promise.all collects these results. When all promises have settled (resolved or rejected), Promise.all produces an array of results that corresponds to the order of the original promises, not the order in which they resolved.

 */

// Task 9 : Use Promise.race to log the value of the promise that resolves among multiple promises.

function createMultiplePromises() {
    let data = [];
    for (let i = 0; i < 10; i++) {
        let delay = Math.floor(Math.random() * 10000) + 1000; // Random delay between 1 and 10 seconds
        data[i] = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(`Promise resolved with value: ${i} after ${delay} ms`);
            }, delay);
        });
    }
    return data;
}

let promises = createMultiplePromises();

Promise.race(promises)
    .then((result) => {
        console.log("First promise resolved:", result);
    })
    .catch((error) => {
        console.log("First promise rejected:", error);
    });
