     1,let p,a,r,e,n,t;

//let f =
//( 
    //f => f()
//);
//console.log("my"+f)
//myf => f()
//console.log(f);
//f => f()

//let f = (
    //f => f(f)
//)
//console.log(f); 
//f => f(f)

//(
    //(f) : f
//)
//Unexpected token :

//let f =
//(
    //(f) => f
//);
//console.log(f);
//(f) => f

//(
    //(f) : f(f) 
//)
//Unexpected token :

//(
    //(f) => f(f)
//)

//(
    //(f) => f(f)
//)
//(
//)

//let f =
//(
    //(f) => {
//}
//)
//console.log(f);

//let f =
//(
//(
  
//) => {
  
//}
//)
//(
//)
//console.log(f); undefined

//let f =
//((f) =>
//(
//) //Unexpected token )
//)

//let f =
//((f) =>
    //(f)
//)
//console.log(f); (f) =>
//(f)

//let f =
//(
    //() =>
    //f(f) //Cannot access f before init
//)
//(
//)

//let f =
//(
    //(f) =>
    //(f(f)) //f Is not a function
//)
//(
//)
let forms = (function(){});
let styles = (function(){});

//t = [
  //{1:1,
   //2:1,}
//]

n = [
  {"id":1,
   "exports":{},
   2:1,},
  {"id":2,
   "exports":{},
   2:2,
   3:3,},
];
   //{"id":3,
    //"exports":{},
   //2:2,},
   //{"id":4,
    //"exports":{},
    //1:1,},
//];

e = [
  [
    function() {
    },
  {1:1,
   2:2,},
    [

    ],
  ],
  [
    function() {
    },
  {1:1,
   2:2,},
    [
    1,
    ],
  ],
  [
    function(x,y,z,a,b,c,d) {
console.log("Module func() call fired, d: "+d)
//Context used is p.exports
//@ x Is equal to function(r)
//@   [Function: r]
//@ y Is equal to p 
//@   [Object object]
//@ z Is equal to p.exports 
//@   [Object object]
//@ a Is equal to r(e,n,t) function
//@ b Is equal to e all module objects
//@ c Is equal to n dependency objects
//@ d Is equal to t all objects records
//console.log("Using Function: y definition: "+y)
    a(b,c,d);
    
    },
    {1:1,
     r:"r",
    2:2,},
    [
    1,
    ],
  ],
];
t = [
  0,
  1,
  2,
  3,
  4,
];

//t = [
    //e.length,
    //n.length,
//]

let require = (function (){return true})();
console.log(require);
console.log("length"+t.length)
let module =
(
    (p) =>
    (a) => (function(){
console.log("arrow");
function r(e,n,t) {
//console.log("rent"+e+n+t);
//function o(i,f) {
function o(i) {
//console.log("function"+i);
    //if (n[i]) { //Needs dependencies
//console.log("Found dependency: Loop length: "+t[1]+" id: "+n[i].id)
    //if (e[i]) { //Loads modules
      
    //}
    //}
    if (!n[i]) { //If record t finds no n dependency
//This design pattern includes all n first
//console.log("!n[i]"+i);
    if (!e[i]) {
//var c="function"==typeof require&&require;
    //if (!f&&c) return c(i,!0)
    //if (u) return u(i, !0)
        var a = new Error("Cannot find module i "+"");
      throw a.code="MODULE_NOT_FOUND",a
    }
    var p=n[i]={exports:{}};
e[i][0].call(p.exports,function(r) {
var n = e[i][1][r];
return o(n||r)},p,p.exports,r,e,n,t);
      //return n[i].exports;
      //e[i][0].call(p.exports,function(r){
        //var n = e[i][1][r];
console.log("Storing n equal to: "+e[i][1][r]+"at t: "+i)
        //return o(n||r)},p,p.exports,r,e,n,t);
        //return n[i].exports;
    }
console.log("Iteration: "+i+" Return n.exports: "+n[i].exports)
    return n[i].exports;
}
console.log("...if");
for (require,i=0;i<t.length;i++) o(t[i])

return o
console.log("Value of r is set to return: "+r);
//return r;
}
//for (var u="function"==typeof require&&require,i=0;i<t.length;i++) o(t[i]);
    //return o
//}
return r(e,n,t)})
);
module(1)(1)(e,n,t)