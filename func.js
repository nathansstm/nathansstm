function f() {
console.log("Function: "+this)
console.log("Function: "+z)
}


const x=x=>
function(y){
return x(y)
};

const c=c=>
x(c);

const z=c(f);
z();
