
let myBtn = document.getElementById("myBtn");
let content = document.getElementById("content");

function getData() {
    console.log("Started getData");
    url = "https://api.github.com/users";

    fetch(url).then((response) => {
        console.log("Inside first then");
        return response.json();
    }).then((data) => {
        console.log("Inside Second then");
        console.log(data);
    })
}

console.log("Before running get data");
getData();
console.log("After running get data");
