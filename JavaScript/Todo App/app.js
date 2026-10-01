let todo =[];
let req= prompt("Please enter your rquest");
while(true){
    if(req=="quit"){
        console.log("You have quit the app");
        break;
    }
    if(req=="list"){
        console.log("*************");
        for(let i=0; i<todo.length; i++){
            console.log(task);
        }
        console.log("**************");
    }
    else if(req=="add"){
        let task=prompt("Please enter the task you want to add");
        todo.push(task);
        console.log(`${task} has been added to the list`);
    }
    else if(req=="delete"){
        let index=prompt("Please enter the index of the task you want to delete");
        todo.splice(index,1);
        console.log(`Task at index ${index} has been deleted`);
    }
    else{
        console.log("Invalid request");
    }
    let req= prompt("Please enter your rquest");
}