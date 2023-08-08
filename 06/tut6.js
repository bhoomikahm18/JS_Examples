console.log('We are at tut6');
const name = 'Harry';
const greeting = 'Good Morning';
console.log(greeting + ' ' + name);

let html;
html = "<h1>This is Heading</h1>" +
    "<p> This is My Para</p>";

html = html.concat('this', ' str2');
console.log(html);
// console.log(html.length);
// console.log(html.toLowerCase());
// console.log(html.toUpperCase());

// console.log(html[1]);
// console.log(html.indexOf('This'));
// console.log(html.indexOf('<'));
// console.log(html.lastIndexOf('<'));
// console.log(html.charAt(3));
// console.log(html.endsWith('str2'));

// console.log(html.includes(' das'));
// console.log(html.substring(10,20));//prints full content if it is negative value.
// console.log(html.slice(0,6));//Allows negative value
// console.log(html.split(' '));
console.log(html.replace('This', 'It'));

let fruits1 = 'Orange\'s';
let fruits2 = 'Apple';
let myHtml = `Hello ${name}
        <h1> this "is" heading</h1>
        <p> You like ${fruits1} and ${fruits2}`;
document.body.innerHTML = myHtml