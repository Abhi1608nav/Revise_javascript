
// -*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*- LOOPS  *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-

console.log("Printing Number from 1 to 10");
for(let i = 1;i<=10;i++)
{
    console.log(i);
}

console.log("Multiplication table of 5 :");
for(let i=1;i<=10;i++){
    console.log(5*i);
}

let sum = 0;
let i=1;
while(i<=10)
{
    sum+=i;
    i++;
}
console.log(`Sum of Number from 1 to 10 is : ${sum}`);

console.log(`Printing Number form 10 t0 1 `);
i=10;
while(i!=0)
{
    console.log(i);
    i--;
}


i=1;
do{
    console.log(i++);

}while(i<=5)


function findFactorial(num1)
{
    let factorial = 1;
    let i = 1;
    do{
        factorial *=i;
        i++;
    }while(i<=num1)
    
    return factorial;

}

let num = Math.floor((Math.random())*20)
console.log(`Factorial of ${num} is ${findFactorial(num)}`);


for(let i = 0;i<5;i++)
{  let s = "";
    for(let j =0;j<=i;j++)
    {
        s+='* ';
    }
    console.log(s);
}

for(let i =1 ; i<=10;i++)
{
    if(i===5)continue;
    console.log(i);
}

for(let i =1 ; i<=10;i++)
    {
        if(i===7)break;
        console.log(i);
    }

