//-------------------------------- Objects ----------------------------------------

//Question 1 : Create an object representing a book woth properties like title, author, and year nad log the object to the console.
let obj1 ={
    title:"Sunsine hell",
    author:"David Marshell",
    year:1989,
}

console.log(obj1);

// Question 2 : Access and log the title and author properties of the book object.

console.log(obj1.author,obj1.title,obj1.year);

//Question 3 : Add a method to the book object that returns a string with the book's title and the author, and log the result of calling this method;

obj1 = {
    ...obj1,
    objContent : ()=>{
        let str = obj1.author + " " + obj1.title
        return str;
    }
}


/**
 obj1 = {
    ...obj1,
    objContent : function(){
        let str = this.author + " " + this.title
        return str;
    }
}

both the objects are equal.
 */

console.log(obj1.objContent());


//Question 4 : Add a method to the book object that takes a parameter (year) and updates the book's year property , then log the updated object

obj1 = {
    ...obj1,
    updateYear : function(year){
        this.year = year;
        return "Updated the year"
    }
}

console.log(obj1);
console.log(obj1.updateYear(1999));
console.log(obj1);


// Question 5 : Create a nested object representing a library with properties like name and book (an array of book objects), and log the library object to the console.

let bookLibrary ={
    obj1:{
        name:"History",
        books:["The Indian History","The Modern history","France war","Rebeliation of France"],
    },
    obj2:{
        name:"Science",
        books:["Human anatomy","Brain","Plant cycle","Homosepience"],
    },
    obj3:{
        name:"Geography",
        books:["The greate himaliays","The untouched land"],
    }
}

console.log(bookLibrary);

// Question 6 : Access and log the name of the library and the titles of all the books in the library.

for(let obj in bookLibrary)
{
    for(let key in bookLibrary[obj] )
    {
        console.log(bookLibrary[obj][key]);
    }
}

// Question 7 : Add a method the book object that uses this keyword to the string with the book's title and year , and log the result of calling this method.

obj1 = {
    ...obj1,
    getTitle : function(){
        return this.title;
    }
}

console.log(obj1.getTitle());


// Question 8 : Use a for...in loop to iterate over the properties of the book objectand log each property and its value.
for(let key in obj1)
{
    console.log(key,obj1[key]);
}

// Question 9 : Use Object.keys and Object.values methods to log all the keys and values of the book object.

console.log("The Key present in the object obj1 are : ",Object.keys(obj1));
console.log("The values present to each key in object obj1 are : ",Object.values(obj1));
