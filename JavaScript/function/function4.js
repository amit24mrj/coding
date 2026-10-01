// Example of currying function
function add(a,b){
    return a+b;
}
function curryAdd(a){
    return function (b){
        return add(a,b);
    };
}
let addFive=curryAdd(5);
console.log(addFive(3));