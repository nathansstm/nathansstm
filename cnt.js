function ran(n) {
let s=n.split("");
s.sort(()=> 
0.5 - Math.random()
);
//let x=(()=>
//0.5 - Math.random()
//);

let y="ABCDEFabcdef";
let z="0123456789";
let u="\<@#\$_\&\-\+\(\)\/\*\"\'\:\;\!\?\,\.\|\^\%\}\[\]\`\>";
y=y.split("");
y.sort(()=> 
0.5 - Math.random()
);
z=z.split("");
z.sort(()=> 
0.5 - Math.random()
);
u=u.split("");
u.sort(()=> 
0.5 - Math.random()
);
//console.log(s);
y=y.join("");
z=z.join("");
    
u=u.join("");
//u="[+-}/.&^|${`}:!?:<>";
    
s=s.join("");
s=s.substring(0,s.length);
//s=s.split("");

y=y.substring(0,5);
z=z.substring(0,5);
u=u.substring(0,5);
    
s=s+y+z+u;
//return Math.floor(x());
//x=Math.floor(Math.random()*s.length);
//console.log("Function: "+s);
//console.log("Position: "+x);
s=s.split("");
s.sort(()=> 
0.5 - Math.random()
); 
    
//s=s.substring(x);
s=s.join(" ");
//s=s.replace(/\s/g,"");
s=s.replaceAll("<","&lt;");
s=s.toString();
s=s.replaceAll(" ","");
    
return `${s}`;
}

const x=x=>
function(y){
return x(y)
};

//let s="STRING";

const a=b=c=>
x(c);

const d=e=f=>
void 
x(c)();

var start = performance.now();

var w=b(ran)("abcde");
//var w=b(md5);

var end = performance.now();

//console.log(`Call took ${end - start} milliseconds`);
//Average: 0.3 to 1ms

console.log(
    w
);
