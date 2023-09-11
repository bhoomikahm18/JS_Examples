console.log("AJAX");

let fetchBtn = document.getElementById('fetchBtn');
fetchBtn.addEventListener('click', buttonClickHandler)

function buttonClickHandler() {
    console.log('You have clicked the buttonClick');
    const xhr = new XMLHttpRequest();

    xhr.open('GET', 'harry.txt', true);

    xhr.onprogress = function () {
        console.log('on Progress');

    }

    xhr.onreadystatechange = function () {
        console.log('ready state is ', xhr.readyState);
    }

    xhr.onload = function () {
        console.log("print");
    }

    xhr.send();
}