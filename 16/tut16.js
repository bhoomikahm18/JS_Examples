let ele = document.querySelector('.container');
let anc = document.createElement('h1');
let tn = document.createTextNode('visit website');
anc.appendChild(tn);
let ret = anc.setAttribute('href','www.google.com');
console.log(ret);

ele.appendChild(anc);

let element = document.createElement('li');
let text = document.createTextNode('I am a text node');
element.appendChild(text);
element.className = 'childul';
element.id = 'createdLi';


element.setAttribute('title','mytitle');


// element.innerText = 'Hello, This is created by harry';
// element.innerHTML = '<b> Hello, This is created by harry</b>';
let ul = document.querySelector('ul.this');
ul.appendChild(element);
// console.log(ul);
// console.log(element);

let elem2 = document.createElement('h3');
elem2.id = 'elem2';
elem2.className = 'elem2';
let tnode = document.createTextNode('This is a created node for elem2');
elem2.appendChild(tnode);

element.replaceWith(elem2);

let myul = document.getElementById('myul');
myul.replaceChild(element, document.getElementById('fui'));
myul.removeChild(document.getElementById('lui'));
let pr = elem2.hasAttribute('href');
elem2.removeAttribute('id');
elem2.setAttribute('title','my elem2 title');
console.log(elem2,pr);