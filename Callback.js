// basic example of callback 
function firstFunc(name,callback){
    console.log("hello there")
    callback(name)
}

function secondFunc(name){
    console.log(name)
}

firstFunc("anjali",secondFunc)