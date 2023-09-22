
// Character classes
let regex = /\war/; //word character _ or alphabet or numbers //har
regex =/\w+d1r/; //['harhard1r', index: 0, input: 'harhard1r4r5r bhai', groups: undefined] //['7rd1r', index: 5, input: 'harh%7rd1r4r5r bhai', groups: undefined]
// \w+ means one or more word characters.
regex = /\Wbhai/ ;  //Non word character  //[' bhai', index: 14, input: 'harh%7rd1r4r5r bhai', groups: undefined]
regex = /\W+bhai/;  //[' %%$@bhai', index: 13, input: 'harh7rd1r4r5r %%$@bhai', groups: undefined]
regex = /number \d999/; //['number 8999', index: 39, input: 'harh7rd1r4r5r %%$@bhai harry ka number 8999999999', groups: undefined]   //--> d means digit
regex = /number \d+/;  //['number 8999999999', index: 32, input: 'harh7rd1r4r5r %%$@bhai harry ka number 8999999999', groups: undefined]  //--> d+ means one or more digit.
regex = /\D999/; //['y999', index: 49, input: 'harh7rd1r4r5r %%$@bhai harry ka number 899999harry9999', groups: undefined]  //-->D means non-digit
regex = /\D+999/; //['harry999', index: 49, input: 'harh7rd1r4r5r %%$@bhai harry ka number 899999harry9999', groups: undefined]  //-->D means more than one non digit


// str = "harhard1r4r5r bhai";
// str = "harh%7rd1r4r5r bhai";
// str = "harh7rd1r4r5r %%$@bhai";
str = "harh7rd1r4r5r %%$@bhai harry ka number 899999harry9999";

let result = regex.exec(str);
console.log("The result from exec is ", result);


if (regex.test(str)) {
    console.log(`The string ${str} matches the expression ${regex.source}`);
} else {
    console.log(`The string ${str} does not matches the expression ${regex.source}`);
}