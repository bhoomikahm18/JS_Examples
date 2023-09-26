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

// let mySet2 = new Set([1, 45, 'this', false, { a: 4, b: 8 }, 'this']);
// console.log('New Set :', mySet2);

console.log(mySet.size);

console.log(mySet.has(345));

console.log('before removal', mySet.has('that2'));

mySet.delete('that2');

console.log('after removal', mySet.has('that2'));