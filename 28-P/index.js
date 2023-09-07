console.log("Hello");

//Constructor
function Book(name,author,type){
    this.name = name;
    this.author = author;
    this.type = type;
}

//Display constructor
function Display(){

}

//Add methods to display prototypes

//Add submit event listener to library form
let libraryForm = document.getElementById('libraryForm');
libraryForm.addEventListener('submit',libraryFormSubmit);

function libraryFormSubmit(e){
    e.preventDefault();
    console.log('You have submitted library form');
}