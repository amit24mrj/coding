// Promise Error Handling
function example(){
    return new Promise((resolve, reject)=>{
        // simulate an error
        reject(new Error("Something went wrong"));
    }).catch((error)=>{
        console.log("Error: "+error.message);
    });
}
example();