//Set stores unique values
const mySet = new Set(); //Initialize an empty set
console.log('The set looks like :', mySet);

//Adding values to the set
mySet.add('this');
mySet.add('My name');
mySet.add('this');
mySet.add('that');
mySet.add(345);
mySet.add(true);
mySet.add(false);
mySet.add('that2');
console.log('The set looks like this now:', mySet);

//Use a constructor to iniatize the set
let mySet2 = new Set([1, 45, 'this', false, { a: 4, b: 8 }, 'this']);
console.log('New Set :', mySet2);

console.log(mySet.size); //get the size of the set

console.log(mySet.has(345)); //check whether set has 345 or not

console.log('before removal', mySet.has('that2'));

mySet.delete('that2'); //Remove an element from the set

console.log('after removal', mySet.has('that2'));

//Iterating the set
// for (let item of mySet) {
//     console.log('Item is : ', item);
// }

mySet.forEach((item) => {
    console.log('Item is : ', item);

})