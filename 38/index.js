let regex = /harrygfkh/;
// Metacharacter symbols
regex = /^harrdc/; //^ means expression will match if string starts with
regex = /harry$/; //$ means expression will match if string ends with
regex = /h./; //. matches any one character
regex = /h*rry/; //* matches any 0 or more characters
regex = /ha?rryi?/; //? after character means that character is optional
regex = /h\*rry/;

// let str = "harry is a good boy and harry is code with harry";
// str = "hsdbdkvubdkuvb is hadrry"
// str = "harryi"
let str = "harry means codewith";

let result = regex.exec(str);
console.log("The result from exec is ", result);

if(regex.test(str)){
    console.log(`The string ${str} matches the expression ${regex.source}`);
}else{
    console.log(`The string ${str} does not matches the expression ${regex.source}`);
}