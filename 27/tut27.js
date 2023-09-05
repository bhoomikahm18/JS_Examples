/* Any Computation we do requires processor for our Js engine to get the result.
Many request interact with things outside of the processor. Eg: they may communicate over a network or request data from the storage disk.
This is a lot slower than getting it from memory.
We dont want our processor to sit idle when such things are happening. 

An asynchronous model allows multiple things to happen at the same time.
In syn- one at a time.
When we call a function that performs a long action,it returns only when the actions has finished so that it can return the result.

Few ways to write asynchronous code in Js
async/await
Callbacks
Promises*/

setTimeout(() => {

    for (let index = 0; index < 45; index++) {
        const element = index;
        console.log("This is index number" + index);

    }
}, 100);
console.log("Done printing");