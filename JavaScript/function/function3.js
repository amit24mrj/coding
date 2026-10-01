// Example of a higher-order function
function twice(func){
    return function(){
        func();
        func();
        func();
    };
}
function sayHello(){
    console.log('Hello!');
    // console.log(3+2); 
}
let sayHelloTwice=twice(sayHello);
sayHelloTwice();