const age = 65;
// const vari =34;
const doesDrive = true;

/*if (age != 19)
{
    console.log('Age is 19');
}
if (age !== 65){
    console.log('Age is 65');
}
else {
    console.log('Age is not 19');
}
if(typeof vari !== 'undefined') {
    console.log('vari is defined');
}
else{
    console.log('vari is not defined');
}
*/
/*
if(doesDrive || age > 18) {
    console.log('You can Drive');
}
else{
    console.log('You can not Drive');
}
*/

// console.log(age == 65 ? 'age is 65' : 'age is not 65');

//Switch case

switch (age) {
    case 18:
        console.log('You are 18');
        break;
    case 28:
        console.log('You are 28');
        break;
    case 38:
        console.log('You are 38');
        break;

    default:
        console.log('You are Unknown age');
        break;

}