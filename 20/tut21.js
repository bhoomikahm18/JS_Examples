// console.log("hi");
let x = 3;
let y = 6;
let z;

z = x + y;
z = x - y;
z = x * y;
z = x / y;

//Exploring the math object
z = Math;
z = Math.PI;
z = Math.E; //2.718281828459045
z = Math.ceil(5.6); //6
z = Math.ceil(5.2); //6
z = Math.round(5.4); //5
z = Math.round(5.5); //6
z = Math.floor(5.3); //5
z = Math.floor(5.6); //5
z = Math.floor(-5.6); //-6
z = Math.abs(-5.6); //5.6
z = Math.sqrt(81); //9
z = Math.pow(2, 3); //2^3 = 8
z = Math.min(2, 3, 34, 234, -34); //-34
z = Math.max(2, 3, 34, 234, -34); //234
z = Math.random(); //0-1
z = 100*Math.random(); //10-100
z = Math.ceil(50+(100-50)*Math.random()); //50-100
console.log(z);