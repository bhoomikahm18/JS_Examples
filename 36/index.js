let a = "Harry Bhai";
a = undefined;
if (a != undefined){
    throw new Error('This is not Undefined');
}
else{
    console.log('This is Undefined');
}

try {
    // dbfkushfioeif
    null.console
    console.log("We are inside try block");
    functionHarry();
} catch (error) {
    console.log(error);
    console.log("Are you okay?");
    console.log(error.name);
    console.log(error.message);
}finally {
    console.log("Finally we will run this");
}