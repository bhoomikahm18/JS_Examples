async function harry(){
    console.log('Inside harry function');
    const response = await fetch('https://api.github.com/users');
    console.log('Before response');
    const user = await response.json();
    console.log('Users resolved');
    return user;
    // return "harry";
}

console.log("Before calling harry");
let a = harry();
console.log("After calling harry");
console.log(a);
a.then(data => console.log(data))
console.log("Last line of this js file");
