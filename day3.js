// const readline = require('readline');
// let r1 = readline.createInterface({
//     input:process.stdin,
//     output:process.stdout,
// })


function numCheck(num1) {
    if (num1 > 0) {
        console.log("Entered Number is positive");
    } else if (num1 < 0) {
        console.log("Entered number is negative");
    } else {
        console.log("Entered number is 0");
    }
}



// let num1;
//  r1.question("Enter a number: ",(input)=>{
//     num1 = input;
//     numCheck(num1);
//     r1.close();
//  });


function isEligibleForVoting(num1) {
    if (num1 < 18) {
        console.log("Not Eligible for voting");
    } else {
        console.log("Eligible for voting");
    }
}

//  r1.question("Enter a your age: ",(input)=>{
//     num1 = input;
//     isEligibleForVoting(num1);
//     r1.close();
//  });




function greaterNumber(num1, num2, num3) {
    if (num1 > num2 && num1 > num3) {
        console.log(`${num1} is greater than both ${num2} and ${num3}`);

    }
    else if (num2 > num3) {
        console.log(`${num2} is greater than both ${num1} and ${num3}`);

    }
    else {
        console.log(`${num3} is greater than both ${num1} and ${num2}`);
    }
}
let num1 = Math.floor((Math.random()) * 10000);
let num2 = Math.floor((Math.random()) * 10000);
let num3 = Math.floor((Math.random()) * 10000);

console.log(`num1 = ${num1} ,num2 = ${num2} ,num3 = ${num3}  `)

greaterNumber(num1, num2, num3);


function getDayByNumber(num1) {
    switch (num1) {
        case 1: console.log("Monday");

            break;
        case 2: console.log("Tuesday");

            break; 
        case 3: console.log("Wednesday");

            break; 
        case 4: console.log("Thrusday");

            break; 
        case 5: console.log("Friday");

            break; 
        case 6: console.log("Saturday");

            break; 
        case 7: console.log("Sunday");

            break;
        default: console.log("Invalid Number")
            break;
    }
}

getDayByNumber(Math.floor(Math.random()*8));


function getGrade(num1) {
    if (num1 > 90) {
        console.log("A");
    } else if (num1 > 80) {
        console.log("B");
    } else if (num1 > 70) {
        console.log("C");
    } else if (num1 > 60) {
        console.log("D");
    } else {
        console.log("Fail");
    }
}

getGrade(Math.floor(Math.random()*100)+Math.floor(Math.random()*100));


function isEven(num1)
{   console.log(`Is number ${num1} is even or odd :`)
    return num1%2===0 ? "even" : "odd" ;
}

console.log(isEven(Math.floor(Math.random()*100)))

function isLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        return true;
    } else {
        return false;
    }
}

// Test the function with different years
const years = [2000, 2001, 2004, 1900, 2024, 2023];
years.forEach(year => {
    console.log(`${year} is a leap year: ${isLeapYear(year)}`);
});
