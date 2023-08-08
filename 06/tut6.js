console.log('We are at tut6');
const name = 'Harry';
const greeting = 'Good Morning';
console.log(greeting + ' ' + name);

let html;
html = "<h1>This is Heading</h1>" +
    "<p> This is My Para</p>";

html = html.concat('this', ' str2');
// console.log(html);
// console.log(html.length);
// console.log(html.toLowerCase());
// console.log(html.toUpperCase());

// console.log(html[1]);
console.log(html.indexOf('This'));
console.log(html.indexOf('<'));
console.log(html.lastIndexOf('<'));
console.log(html.charAt(3));
console.log(html.endsWith('str2'));
