
   //function c(x) {
      //return function (y) {
        //return x(y);
      //}
   //}
//Advantage to above is code
//abstract

function f() {
  
    console.log("Function: "+this)
  
    console.log("Function: "+z)
}


//z = (y) abstracts Initializer
//const c = z = (y) => (
    //x(y)
//)
//Function: [object Window]
//(y) => (
//    x(y)
//)

//Function parameter y in function(y)
//is to avoid x(y), y undefined
//z = (y) abstracts Initializer
//const c = (x) => {
    //return function (y) {
        //return x(y)
    //}
//}
const x = (x) => {
    return function (y) {
        return x(y)
    }
}
//const c Function takes parameter
// Runs x Initialize above
//Returns iife anonymously
//uses f definition and calls
//x to run the definition
const c = (y) => { 
        return x(y)
}
//Initializer (y) returns function
//With parameter y, and uses y
//To Initialize With x above
//Meanwhile parameter y
//Used in the initial call
//Is defined, passed f,
//Remains safe, abstract
//Ie changing (y),y in any
//is fine
//console.log("Function :"+x)


//Arrow function (x) Initializer
//Returns a function
//const y = (y) => {
//}
//console.log("Function: "+c)
const z = c(f);
z();

//Function: [object Window]
//function (y) {
//    return x(y)
//}
//Function (y) Returns function f()
//Which is immediately initialized

//a();
//Can still curry further


//(
    //(c) => c(c)
//)
//(
    //(y) => z=
    //(x) => {
        //x(y);
    //}
//)
//(
    //(z) => {return f()}
//)


//let z=c(f);
//Function: [object Window]
//function (x) {
//    return x(y)
//}

    //const z = c(f);
//z();
//Function: [object Window]
//function (y) {
//    return x(y)
//}

