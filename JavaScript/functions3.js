// Creating a Memoized Function with a Closure
function memoize(func){
    let cache={};
    return function(...args){
        let key=JSON.stringify(args);
        if(cache[key]){
            return cache[key];
        }
        let result=func(...args);
        cache[key]=result;
        return result; 
    };
}
function add(a,b){
    console.log('Computing result...');
    return a+b;
    // return a-b;
}
let memoizedAdd=memoize(add);
console.log(memoizedAdd(2,3));
console.log(memoizedAdd(2,4))