//console.log('Welcome to tutorial 15');

let ele = document.querySelector('.no');
ele = document.querySelector('.container');

// Node types
// 1. Element
// 2. Attribute
// 3. Text Node
// 8. Comment
// 9. document
// 10. docType


let nodes = ele.childNodes;

for(let n of nodes){
    //console.log(n.nodeType);
    if(n.nodeType == 1){
        console.log(n.childNodes[0].nodeValue);
    }
}


let container = document.querySelector('div.container');

 console.log(container.children[1].children[0].children);
console.log("Balaji");
//console.log(container.firstChild);
//console.log(container.firstElementChild);

//console.log(container.lastChild);
//console.log(container.lastElementChild);
console.log(container.children);
console.log(container.childElementCount); // Count of child elements

console.log(container.firstElementChild.parentNode);
console.log(container.firstElementChild.nextSibling);
console.log(container.firstElementChild.nextElementSibling);
console.log(container.firstElementChild.nextElementSibling.nextElementSibling);