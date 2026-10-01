// JavaScript Arrays
let numbers=[1,2,3,4,5];
console.log(numbers);
numbers.splice(2,0,2.5); //inserts 2.5 at index 2
console.log(numbers)

let subset=numbers.slice(1,3) //creates a new array from index 1 to 3 (not including index 3)
console.log(subset);