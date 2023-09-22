let reg = /harry/; //This is a RE literal in JS
// reg = /harry/g; //g means global
// reg = /harry/i; //i means case sensitive

console.log(reg);
console.log(reg.source); //harry

let s = "This is great code with harry and also harry bhai";
/* Functions to match expressions
1. exec() - This function will return an array for match or null for no match */
let result = reg.exec(s);
// console.log(result); //['harry', index: 24, input: 'This is great code with harry ', groups: undefined]
// result = reg.exec(s);
// console.log(result);//['harry', index: 39, input: 'This is great code with harry and also harry bhai', groups: undefined]
//we can use multiple exec with global flag
// if(result){
console.log(result);
console.log(result.input);
console.log(result.index);
// }

//2.test()- returns true or false
let result2 = reg.test(s);
// console.log(result2); --> This will only print true if the "reg" is there in a string "a"

// 3. match() - It will return an array of results or null.
let result3 = s.match(reg) //--> This is right
console.log(result3);

// 4. search() - Returns index of first match else -1.
let result4 = s.search(reg)
console.log(result4);

// 5. replace() - Returns new replace string with all the replacements. (If no flag is given, first match will be replaced)
let result5 = s.replace(reg, "SHUBHAM");
console.log(result5);