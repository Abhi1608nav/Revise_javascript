// ------------------------- CLASSES -----------------------------------

// Task 1 : Define a class Person with properties name and age , and a method to return a greeting message. Create an instance of the class and log the greeting message.
 class Person {
     constructor(name,age){
        this.name=name,
        this.age=age
     }

     greeting()
     {
        console.log(`Hello ${this.name} `);
     }

     updateAge(age)
     {
        this.age = age;
     }

     getDetails()
     {
        console.log(`Name : ${this.name}
age = ${this.age}`);
     }

     static genericGreeting()
     {
        console.log(`Welcome ! This is a generic greeting`);
     }
 }


 let person1 = new Person('Abhinav Shakya',21);
 person1.greeting();
 person1.getDetails();


 // Task 2 : Add a method to the Person class that updates the age property and logs the updated age.

person1.updateAge(22);
person1.getDetails();


// Task 3 : Define a class Student that extends the Person class. Add a property studentId and a method to return the student ID. Create an instance of the Student Class and log the student ID.

class Student extends Person {
    static totalNumberOfStudents = 0;
    constructor(name,age,studentId)
    {
        super(name,age);
        this.studentID = studentId;
        Student.totalNumberOfStudents +=1;
    }

    getStudentDetails(){
        console.log(` Student Name : ${this.name} \n  Age : ${this.age} \n studentID : ${this.studentID}`);
    }

    getStudentId()
    {
        console.log(`Student ID : ${this.studentID}`);
    }

    greeting()
    {
        console.log(`Hello ${this.name} , Your Student ID is ${this.studentID} and as per your age ${this.age} you can apply for this internship`);
    }

    static getTotalStudent()
    {
         return Student.totalNumberOfStudents;
    }

    

}


let student = new Student("Abhinav Shakya" , 21,"2101038CS");
student.getStudentDetails();
student.getStudentId();


// Task 4 : Override the greeting method in the Student class to include the student ID in the message. Log the overridden greeting message.

student.greeting();


// Task 5 : Add a static method to the Person class that returns a generic greeting message. Call this static method without creating an instance of the class and log the message.

Person.genericGreeting();

// Task 6 : Add a static property to the Student class to keep track of the number students created. Increment this propertu in the constructor and log the total number of students.

console.log(Student.getTotalStudent())
let student1 = new Student("Abhishek",21,"2101042CS");
let student2 = new Student("Aman",22,"2101040CS");

console.log(Student.getTotalStudent());

// Task 7 : Add a getter method to the person class to return the full name (assume a firstName and lastName property ). Create an instance and log the full name using the getter method.

let person2 = new Person("Ashish Mishra",21);
person2.getDetails();


// Task 8 : Add a setter method to the Person class to update the name properties (firstName, lastName). Update the name the setter and log the updated full name.

class Person1{
    constructor(firstName,lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }

    setterFirstName(fName)
    {
        this.firstName = fName;
    }

    setterLastName(lName)
    {
        this.lastName = lName  
    }

    getDetails()
    {
        return {
            firstName: this.firstName,
            lastName: this.lastName
        }
    }
}


let person3 = new Person1("Abhinav","Shakya");
console.log(person3.getDetails());
person3.setterFirstName("Abhishek");
console.log(person3.getDetails());
person3.setterLastName("Goyal");
console.log(person3.getDetails());


// Task 9 : Define a class Account with private for balance and a method to deposite and withdraw money. Ensure that the balance can only updated through these methods.
// Task 10 : Create an instance of the Account class and test the deposit and withdraw methods, logging the balance after each operation.
class Account{
    #balance;
    constructor(name,email,password,phoneNumber,initialBalance)
    {
        this.name = name;
        this.email = email;
        this.password = password;
        this.phoneNumber = phoneNumber;
        this.#balance = initialBalance;
    }

    deposite(amount){
        if(amount>0)
        {
            this.#balance +=amount;
        }
        else{
            console.log("Amount should be greater than 0");
        }
    }

    withdraw(amount)
    {
         if(amount>0)
         {
            if(this.#balance >=amount)
            {
                this.#balance -=amount;
            }
         }
         else{
            console.log("Amount should be greater than 0");
         }
    }

    getBalance()
    {
        console.log(`Name : ${this.name} \nBalance : ${this.#balance}`);
    }



    
}


let myAccount = new Account("Abhinav Shakya","abhi@gmail.com","12313@123asdf13@5",8931210321,50000);
myAccount.getBalance();
myAccount.deposite(12300);
myAccount.getBalance();
myAccount.withdraw(40021);
myAccount.getBalance();
