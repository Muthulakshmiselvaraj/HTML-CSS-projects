
var popupoverlay = document.querySelector(".popup-overlay");
var popupbox = document.querySelector(".popup-box");
var addpopupbutton = document.getElementById("popup-button");

// Event listener for the add button click
addpopupbutton.addEventListener("click", function () {
    popupoverlay.style.display = "block";
    popupbox.style.display = "block";
});

// Event listener for the cancel button click
var cancelpopup = document.getElementById("cancel-book")
cancelpopup.addEventListener("click", function () {
    event.preventDefault()
    popupoverlay.style.display = "none";
    popupbox.style.display = "none";
});
//select container,add-book,Book-title-input,book-author-input,book-description-input
var container = document.querySelector(".container")
var addbook = document.getElementById("add-Book")
var booktitle = document.getElementById("Book-title-input")
var bookauthor = document.getElementById("Book-author-input")
var bookdescription = document.getElementById("Book-description-input")

addbook.addEventListener("click", function(){
    event.preventDefault()
    var div = document.createElement("div")
    div.setAttribute("class","book-container")
    div.innerHTML=`<h2>${booktitle.value}</h2>
    <h5>${bookauthor.value}</h5>
    <p>${bookdescription.value}</p>
    <button onclick="deletebook(event)">Delete</button>`
    container.append(div)
    popupoverlay.style.display = "none";
    popupbox.style.display = "none";

})
function deletebook(event){
    event.target.parentElement.remove();
}


