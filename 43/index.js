//generators in Javascript
//1-1B

function* numbersGen(){
    let i = 0;

    // yield 1;
    // yield 2;
    // yield 3;
    // yield 4;
    while(true){
        yield i++;
    }
}

const gen = numbersGen();
console.log(gen.next());
console.log(gen.next());