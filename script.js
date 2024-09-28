
//Position navBar to the right [get element by ID] X
let navBar = document.getElementById('mainNavBar');
navBar.style.textAlign = "right";


//Color for fieldsets[QuerySelectorALl] X
const fieldSets = document.querySelectorAll("fieldset");
fieldSets.forEach(fset => {
    fset.style.backgroundColor = "rgb(79, 52, 105)";
    fset.style.borderRadius = "15px";
    fset.style.padding = "1em";
});


//iterate over a collection of elements to complete a task

//CreateElement X
//Append Child or Prepend X
const comments = document.getElementById("comments");
let button = document.createElement("button");
button.textContent = "Post"

comments.appendChild(button);


// Include at least one form and/or input with DOM event-based validation. (This can be the same form or input as the one above, but should include event-based validation in addition to the HTML attribute validation.)
//Required in HTML

//Modify the HTML or text Content in response to user interaction using text Content X
//Register at least two different event listeners and create the associated event handler funciton X
//// Use at least two Browser Object Model (BOM) properties or methods X
let cmtInput = document.getElementById('cmtInput')
let addedComments = document.getElementById('addedComments')

addedComments.addEventListener("click", addComment)

function addComment() {
    let comment = cmtInput.value;
    if (comment === "") return; //will not add comments

    //add comments
    let postedComment = document.createElement("p");
    postedComment.textContent = comment;
    postedComment.style.color = "white";
    comments.insertBefore(postedComment, button.nextSibling);


    cmtInput.value = "";
    cmtInput.focus();
}

button.addEventListener("click", addComment);
button.onclick = function () {

}

//Creepy Pasta Window
let creepyPastaWindow;

function popUp() {
    creepyPastaWindow = window.open(
        "https://www.creepypasta.com/",
        "Creepy Pasta",
        "width=900, height=600, resizable=yes, scrollbars=yes, location=yes"
    )
}

document.getElementById("readCP").addEventListener("click", popUp);

//Days to Halloween
//id is now countDown

// Iterate over a collection of elements to accomplish some task.
//HTML Collection - getElementsByTagName() 
//Modify at least one attribute of an element in response to user interaction.
//// Modify the style and/or CSS classes of an element in response to user interactions using the style or classList properties. []
let daysToHween = document.getElementsByTagName('h1');

for (let h = 0; h < daysToHween.length; h++) {
    daysToHween[h].addEventListener('click', () => {
        alert(`We're almost there!`);
        daysToHween[h].style.backgroundColor = "rgb(214, 90, 41)";
        daysToHween[h].style.color = " rgb(231, 167, 141)";
        daysToHween[h].style.fontFamily = "Creepster"
        daysToHween[h].style.maxWidth = "40%"

        let ghost = document.createElement("img");
        ghost.src = "./ghost.gif";
        document.getElementById("test").appendChild(ghost);
    });
}

//Parent Node to navigate between elements
let parentNode = document.getElementById('title');
let firstChild = parent.firstChild;

let hookQuote = document.createElement("p");
hookQuote.textContent = "These stories are to die for!"

parentNode.insertBefore(hookQuote, firstChild);



//TIMER

//Current Day
const date = new Date();
let day = date.getDate();
// console.log(day)

let month = date.getMonth() + 1;
// console.log(month)  

let mthsDays = `${month}-${day}`;
console.log(mthsDays)
let todaysDate = document.getElementById('todaysDate');

function updateDate() {
    let convertDate = mthsDays.toString();
    todaysDate.textContent += convertDate + ' ';
}

updateDate()


//Countdown timer
let halloweenDate = new Date("Oct 31, 2024").getTime();

let intervals = setInterval(function () {
    let updatedDate = new Date().getTime();
    let distance = halloweenDate - updatedDate;
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));

    document.getElementById("timer").innerHTML = ":      " + days + "     days ";

    if (distance < 0) {
        clearInterval(intervals);
        document.getElementById("timer").innerHTML = "Halloween is over! :(";
    }
}, 1000);









