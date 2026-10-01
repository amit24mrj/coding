function outer(){
    let x=10;
    function inner(){
        console.log(x);
    }
    return inner;
}
let inner=outer();
inner();

// Immediately Invoked Function Expressions (IIFE)

(function(){
    console.log('Hello, World!');
})
();