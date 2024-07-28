let person = {
    firstName:"Abhinav",
    lastName:"Shakya",
    age:21,
    getDetails:function (){
         return`I am ${this.firstName} ${this.lastName} and I am ${this.age} year old`;
    },
    phoneNumber : 9922912348,
    email : "abhinav@gamil.com",
}

module.exports = person;