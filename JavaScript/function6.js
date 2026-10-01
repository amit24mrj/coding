// Simple Function
function greet(name){
    console.log(`Hello, ${name}!`);
}
greet('Amit kumar');

// function with Return Value

function add(x,y){
    return x+y;
}
let result= add(5,8);
console.log(result);

// function with Multiple Parameters

function calculateArea(length,width){
    return length*width;
}
let area=calculateArea(5,3);
console.log(area);

// function with Default Parameters
function greet(name='Mahima sahani'){
    console.log(`Hello, ${name}!`);
}
greet();
greet('Amit sahani');

// Function with Rest Parameters
function sum(...numbers){
    let result=0;
    for(let number of numbers){
        result+=number ;
    }
    return result;
}
let res= sum(1,2,3,4,5);
console.log(res);

// function with Arrow Function Syntax

let addN=(x,y)=>x+y;
let result1=addN(2,3);
console.log(result1);

// Function with Immediately Invoked Function Expression(IIFE)
(function(){
    console.log('Hello, World');
})
();