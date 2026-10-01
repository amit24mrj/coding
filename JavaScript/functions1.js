//  Creating a Closure with a Counter
function createCounter(){
    let count=0;
    return function(){
        count++;
        console.log(`Count: ${count}`);
    };
}
let counter=createCounter();
counter();
counter();
counter();