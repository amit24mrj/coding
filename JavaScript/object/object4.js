// object Iteration
// for...in
let person={
    name:'Amit kumar',
    age:22,
    class:12
}
for (let prop in person){
    console.log(`${prop}: ${person[prop]}`);
}