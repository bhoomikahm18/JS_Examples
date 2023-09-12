/*Promise: 
resolve
reject 
pending */

function func1(){
    return new Promise(function(resolve,reject){
        setTimeout(()=>{
            const error = true;
            if (!error){
            console.log("Your promises has been resolved");
            resolve();
            }
            else{
                console.log("Your promises has  not been resolved");
                reject('Sorry not fulfilled');
            }
        },2000);
    })
}


func1().then(function(){
    console.log("Harry: Thanks for resolving");
}).catch(function(error){
    console.log("Harry: Very bad bro. Reason: "+ error);
});