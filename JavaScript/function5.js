// function Declaration
function add(x,y)
{
    return x+y;
}
console.log(add(2,3));

// function Expression
let subtract=function(x,y){
    return x-y;
};
console.log(subtract(5,3));

// Function Invocation
function greet(name){
    console.log(`Hello, ${name}!`);
}
greet('Amit kumar')


// Function Argument
function add(x,y,z){
    return x+y+z;
}
console.log(add(4,5,6));

// Function Return Values
function multiply(x,y){
    return x*y;
}
let result=multiply(2,3);
console.log(result);