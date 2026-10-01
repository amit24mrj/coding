// Using Array Methods
let numbers=[1,2,3,4,5];
let sum=numbers.reduce((a,b) => a+b,0);
console.log(sum);

// Using Array Iteration Methods

numbers.forEach((number)=>{
    console.log(number);
});


// Using Array Transformation Methods

let doubleNumbers=numbers.map((number)=>number*2);
console.log(doubleNumbers);

// Using Array Filtering Method
let evenNumbers=numbers.filter((number)=>number%2===0);
console.log(evenNumbers);