// Looking into the call stack
function first(){
    console.log("Executing the first function")
    second()
}

function second(){
    console.log("Executing the second function")
    third()
}

function third(){
    console.log("Executing the third function")
}

first()