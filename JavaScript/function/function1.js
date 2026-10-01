// Example of an impure function
function addAndLog(a,b){
    console.log(`Adding ${a} and ${b}`);
    return a+b;
}
let sum=addAndLog(5,7);
console.log(sum);