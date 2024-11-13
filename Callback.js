// basic example of callback 
// firstFunc is HOF
// secondFunc is Callback function
function firstFunc(name,callback){
    console.log("hello there")
    callback(name)
}

function secondFunc(name){
    console.log(name)
}

firstFunc("anjali",secondFunc)