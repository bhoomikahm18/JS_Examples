let array = ['adrak', 'pyaz', 'bhindi'];

//Add a key value pair inside the local storage.
// localStorage.setItem('Name', 'Harry');
// localStorage.setItem('Name2', 'Rohan');
// localStorage.setItem('Sabzi',JSON.stringify(array) );

// localStorage.clear();

//clear the perticular key-value pair.
// localStorage.removeItem('Name');

//Retrives the item from the local Storage.
let name = localStorage.getItem('Name');
name = JSON.parse(localStorage.getItem('Sabzi'));
console.log(name); //harry

// sessionStorage.setItem('sessionName', 'sHarry');
// sessionStorage.setItem('sessionName2', 'sRohan');
// sessionStorage.setItem('sessionSabzi',JSON.stringify(array) );