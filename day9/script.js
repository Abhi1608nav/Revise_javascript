
// ------------------- DOM Manipulation --------------------------------

//Task 1: Select an HTML element by its ID and change its text content.
const textContent = document.getElementById('text-content');
textContent.textContent="AbhinavShakya";

//Task 2: Select an HTML element by its class and change its background color.
const bgColor = document.getElementsByClassName('bgColor');

Array.from(bgColor).forEach((ele)=>{
    console.log(ele);
    ele.style.backgroundColor = "red";
    ele.style.color = "blue"
})



//Task 3: Create a new div element with some text content and append it to the body.
const newDiv = document.createElement('div');
newDiv.id = 'newDivId';
newDiv.class = 'newDivClass';
newDiv.textContent = "Hello I am Abhinav Shakya ";
newDiv.style.color="#c723cc";
newDiv.style.fontSize ="2rem"
document.body.append(newDiv);


// Task 4: Create a new li element and add it to an existing ul list.
const ulContent = document.getElementById('ulContent');
const newLi = document.createElement('li');
newLi.textContent="Trucks";
ulContent.appendChild(newLi);

//Task 5: Select an HTML element and remove it from the DOM.
const wrapper = document.querySelector('.wrapper');
const wrapperChild = document.querySelector('.childdiv');
console.log(wrapper,wrapperChild)
if(wrapper && wrapperChild)
{
    wrapper.removeChild(wrapperChild);
}

// const wrapperChild1 = document.querySelector('.childdiv');
// console.log(wrapper,wrapperChild1)



//Task 9: Add a click event listener to a button that changes the text content of a paragraph.
const clickMeButton = document.querySelector('#clickMe');
clickMeButton.addEventListener('click',()=>{
    textContent.textContent="Hi I am Abhinav Shakya and I am 21 year old";
})


//Task 10: Add a mouseover event listener to an element that changes its border color.
clickMeButton.addEventListener('mouseover',()=>{
    clickMeButton.style.borderColor="blue"
    clickMeButton.style.fontSize = '2rem';
    clickMeButton.style.color="red"
    clickMeButton.style.width = '150px'
    clickMeButton.style.height = '80px'
})

clickMeButton.addEventListener('mouseout',()=>{
    clickMeButton.style.borderColor="black"
    clickMeButton.style.fontSize = '1rem';
    clickMeButton.style.color="blue"
     clickMeButton.style.width = '100px'
    clickMeButton.style.height = '50px'
})


//Task 6: Remove the last child of a specific HTML element.

const parentDiv = document.getElementsByClassName('parent');
const childrenOfParent = document.getElementsByClassName('parents-Child');
console.log(Array.from(childrenOfParent));
if(parentDiv.length>0)
{
    let parent = parentDiv[0];

    if(childrenOfParent.length>0)
    {
        const lastElement = childrenOfParent[childrenOfParent.length -1];
        parent.removeChild(lastElement);
    }
}


//Task 8: Add and remove a CSS class to/from an HTML element.

const divOfClasses = document.getElementsByClassName('hello');
console.log(divOfClasses[0].classList);
divOfClasses[0].classList.remove('eat');
console.log(divOfClasses[0].classList);
divOfClasses[0].classList.add('eatMe');
console.log(divOfClasses[0].classList);


//Task 7: Select an HTML element and change one of its attributes (e.g., src of an img tag).

document.getElementById('changeImageButton').addEventListener('click', () => {
    // Select the image element using querySelector
    const image = document.querySelector('.myImage');
    
    // Change the src attribute
    image.src = 'software1.jpg';
})










