// Throw Statement
function divide(x,y){
    if(y===0){
        throw new Error("Connot divide by zero");
    }
    return x/y;
}
try{
    let result=divide(5,0);
}
catch(error){
    console.log("Error: "+error.message);
}