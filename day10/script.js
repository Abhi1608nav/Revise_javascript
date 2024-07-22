const pText = document.querySelector('.pText');
const changeTextButton = document.querySelector('#changeText');

changeTextButton.addEventListener('click',()=>{
    pText.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium voluptatibus unde, ipsum velit optio impedit ex. Officiis dolorem tempore eaque consequuntur natus, ut, cupiditate itaque maxime vel animi quaerat recusandae? Nostrum pariatur sunt aut."
});



// Task 2 : Add a double-click event listener to an image that toggles its visibility

const imageChange = document.querySelector('#doubleClickChange');

console.log(imageChange);

imageChange.addEventListener('dblclick',()=>{
   if( imageChange.style.opacity == 1 ||  imageChange.style.opacity === '')
   {
    imageChange.style.opacity = 0.5 ;
   }
   else{
    imageChange.style.opacity = 1;
   }
    console.log(imageChange);
});


// Task 3 : Add a mouseover event listener to an element that changes its background color.

const changeBackGround = document.querySelector('.backGroundColor');

changeBackGround.addEventListener('mouseover',()=>{
        changeBackGround.style.backgroundColor = '#d110be'
})

// Task 4 : Add a mouseout event listener to an element that reset  its background color.

changeBackGround.addEventListener('mouseout',()=>{
    changeBackGround.style.backgroundColor = '#aad110'
})



// Task 5: Add a keydown event listener to an input field that logs the key pressed to the console.

const clickDown = document.querySelector('#keyDown');

clickDown.addEventListener('keydown',(e)=>{
    // console.log(e);
   if(e.code === "ArrowDown")
   {
    console.log("Pressing Key Down");
   }
})

// Task 6 : Add a keyup event listener to an input field that displays the current value in a paragraph;

const keyUp =  document.querySelector('#keyUp');

keyUp.addEventListener('keyup',(e)=>{
    // console.log(e);
   if(e.code === "ArrowUp")
   {
    console.log("Pressing Key Up");
   }
})



// Task 7 : Add a submit event listener to a form that prevents the default submission and logs the form Data in console.

const submitFormData = document.querySelector('#myformData');

submitFormData.addEventListener('submit',(e)=>{
    e.preventDefault();

    const formData = new FormData(submitFormData);
    const entries = formData.entries();
    for (const [name, value] of entries) {
        console.log(`${name}: ${value}`);
    }

    // const name = document.querySelector('#name');
    // const email = document.querySelector('#email');
    // const password = document.querySelector('#password');
    // console.log({name:name.value, email : email.value , password : password.value});
})


// Task 8 : Add a change event listener to a select dropdown that displays the selected value in a pragraph.

const selectedItem = document.querySelector('#cars');
console.log(selectedItem.value)

selectedItem.addEventListener('change',(e)=>{
     e.preventDefault();
     if(selectedItem.value !== e.target.value)
     {
        console.log(e.target.value);
     }
     else{
        console.log(selectedItem.value);
     }
    //  console.log(e);
    //  console.log(e.target.value);
})


// Task 9 : Add a click event listener to a list that logs the text content of the clicked list item using event delegation.

const ulData = document.querySelector('#list');

ulData.addEventListener('click',(e)=>{
    console.log(e.target.innerHTML)
})

// Task 10 : Add an event listener to a parent element that listens for events form dynamically added child elements.

const divData = document.querySelector('.diveee');
const addElementeee = document.querySelector('#addElement');

addElementeee.addEventListener('click',()=>{
const newLi = document.createElement('input');
newLi.value = "Hi How are you ? ";
divData.append(newLi);
})