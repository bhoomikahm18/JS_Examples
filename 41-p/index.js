const name = document.getElementById('name');
const email = document.getElementById('email');
const phone = document.getElementById('phone');

// console.log(name,email,phone);
name.addEventListener('blur',()=>{
    console.log("name is blurred");
    //Validate name here
    let regex = /^[a-zA-Z]([0-9a-zA-z]){2,10}$/;
    let str = name.value;
    console.log(regex,str);
    if(regex.test(str)){
        console.log('name is valid');
        name.classList.remove('is-invalid');
    }
    else{
        console.log('no match');
        name.classList.add('is-invalid');
    }
})
email.addEventListener('blur',()=>{
    console.log("email is blurred");
    //Validate email here
})

phone.addEventListener('blur',()=>{
    console.log("phone is blurred");
    //Validate phone here
})