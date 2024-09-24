
//Position navBar to the right [get element by ID]
let navBar = document.getElementById('mainNavBar');
navBar.style.textAlign = "right";

//Color for fieldsets[QuerySelectorALl]
const fieldSets= document.querySelectorAll("fieldset");
fieldSets.forEach(fset=>{
    fset.style.backgroundColor="maroon";
    fset.style.borderRadius="15px";
    fset.style.padding="1em";

})

//Parent Node to navigate between elements

//iterate over a collection of elements to complete a task

//CreateElement
//Append Child or Prepend
const comments = document.getElementById("comments");
const button = document.createElement("button");
button.textContent="Post"

comments.appendChild(button);


// Include at least one form and/or input with DOM event-based validation. (This can be the same form or input as the one above, but should include event-based validation in addition to the HTML attribute validation.)
//Required in HTML



