function addNumber(num1,num2){
    console.log(`num1 = ${num1},num2 = ${num2}`);
    return num1+num2;
}

console.log("Addition of two number is",addNumber(Math.floor(Math.random()*123421),Math.floor(Math.random()*123421)));

function substractNumner(num1,num2)
{   
    console.log(`num1 = ${num1},num2 = ${num2}`);
    return num1 - num2;
}

console.log("Substraction of two number is",substractNumner(Math.floor(Math.random()*123421),Math.floor(Math.random()*123421)));

function multiplyNumber(num1,num2)
{  
    console.log(`num1 = ${num1},num2 = ${num2}`);
    return num1*num2;
}
console.log("Multiplication of two number is",multiplyNumber(Math.floor(Math.random()*123421),Math.floor(Math.random()*123421)));


function divideNumber(num1,num2)
{  
    console.log(`num1 = ${num1},num2 = ${num2}`);
    if(num2===0)
    {
         return NaN;
    }
    return num1/num2;
}
console.log("Division of two number is",divideNumber(Math.floor(Math.random()*123421),Math.floor(Math.random()*123421)));


function RemainderOfNumber(num1,num2)
{  
    console.log(`num1 = ${num1},num2 = ${num2}`);
    if(num2===0)
    {
         return NaN;
    }
    return num1%num2;
}
console.log("Remainder of two number is",RemainderOfNumber(Math.floor(Math.random()*123421),Math.floor(Math.random()*123421)));


let a = 12112;
a+=21231;
console.log(a);

let b = 922121;
b-=12123;
console.log(b);

let val1 =10;
let val2 = 20;

if(val1===10 && val2===20)
{
    console.log(30);
}

let name = "abhinav";
let age = 21;

if(name==="abhinav" || age === 23)
{
    console.log("Sherrrrrrrrrrrrrrr");
}

if(name === "abhinav" && age!=23)
{
    console.log("BabarSherrrrrrrrrrr");
}


let isTrue  = val1===10 ? true : false;
console.log(isTrue);