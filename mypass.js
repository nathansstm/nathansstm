//function f() {
   //console.log("Function: "+this)
 //console.log("Function: "+a)
//}
function f() {
   //console.log("Function: "+this);
 //console.log("Function: "+b);
}

function r(r) {
  //Create a randomly generated password
    //console.log("Function: "+r);
}

function e(user) {
  //Returns a secure hash value
    var hexcase=0;
    var b64pad="";

    //var hexcase=2;

    //this.inner = function () {
        //return hexcase;
    //}
  

    return this;
}

function md5(str) {
  //console.log("Function: "+a)
  //console.log("Functionl: "+str)
    return hex(str_md5(str));
}
//function md5() {
    //return s;
  //console.log("Function: ");
    
//}

function m51() {
    //console.log("Functions: "+this)
}

function str_md5(s) {
  //console.log("Function: "+s)
    return md52(s);
}

function n(x) {
return function(y) {
    return x(y);
}
}

function md5cycle(x,k) {
  var a = x[0], 
      b = x[1], 
      c = x[2], 
      d = x[3];
    a =ff(a,b,c,d,k[0],7 , -680876936);
    d =ff(d,a,b,c,k[1],12, -389564586);
    c =ff(c,d,a,b,k[2],17, 606105819);
    b =ff(b,c,d,a,k[3],22, -1044525330);
    a =ff(a,b,c,d,k[4],7 , -176418897);
    d =ff(d,a,b,c,k[5],12, 1200080426);
    c =ff(c,d,a,b,k[6],17, -1473231341);
    b =ff(b,c,d,a,k[7],22, -45705983);
    a =ff(a,b,c,d,k[8],7, 1770035416);
    d =ff(d,a,b,c,k[9],12, -1958414417);
    c =ff(c,d,a,b,k[10],17, -42063);
    b =ff(b,c,d,a,k[11],22, -1990404162);
    a =ff(a,b,c,d,k[12],7, 1804603682);
    d =ff(d,a,b,c,k[13],12, -40341101);
    c =ff(c,d,a,b,k[14],17, -1502002290);
    b =ff(b,c,d,a,k[15],22, 1236535329);

    a =gg(a,b,c,d,k[1],5, -165796510);
    d =gg(d,a,b,c,k[6],9, -1069501632);
    c =gg(c,d,a,b,k[11],14, 643717713);
    b =gg(b,c,d,a,k[0],20, -373897302);
    a =gg(a,b,c,d,k[5],5, -701558691);
    d =gg(d,a,b,c,k[10],9, 38016083);
    c =gg(c,d,a,b,k[15],14, -660478335);
    b =gg(b,c,d,a,k[4],20, -405537848);
    a =gg(a,b,c,d,k[9],5, 568446438);
    d =gg(d,a,b,c,k[14],9, -1019803690);
    c =gg(c,d,a,b,k[3],14, -187363961);
    b =gg(b,c,d,a,k[8],20, 1163531501);
    a =gg(a,b,c,d,k[13],5, -1444681467);
    d =gg(d,a,b,c,k[2],9, -51403784);
    c =gg(c,d,a,b,k[7],14, 1735328473);
    b =gg(b,c,d,a,k[12],20, -1926607734);

    a =hh(a,b,c,d,k[5],4, -378558);
    d =hh(d,a,b,c,k[8],11, -2022574463);
    c =hh(c,d,a,b,k[11],16, 1839030562);
    b =hh(b,c,d,a,k[14],23, -35309556);
    a =hh(a,b,c,d,k[1],4, -1530992060);
    d =hh(d,a,b,c,k[4],11, 1272893353);
    c =hh(c,d,a,b,k[7],16, -155497632);
    b =hh(b,c,d,a,k[10],23, -1094730640);
    a =hh(a,b,c,d,k[13],4, 681279174);
    d =hh(d,a,b,c,k[0],11, -358537222);
    c =hh(c,d,a,b,k[3],16, -722521979);
    b =hh(b,c,d,a,k[6],23, 76029189);
    a =hh(a,b,c,d,k[9],4, -640364487);
    d =hh(d,a,b,c,k[12],11, -421815835);
    c =hh(c,d,a,b,k[15],16, 530742520);
    b =hh(b,c,d,a,k[2],23, -995338651);

    a =ii(a,b,c,d,k[0],6, -198630844);
    d =ii(d,a,b,c,k[7],10, 1126891415);
    c =ii(c,d,a,b,k[14],15, -1416354905);
    b =ii(b,c,d,a,k[5],21, -57434055);
    a =ii(a,b,c,d,k[12],6, 1700485571);
    d =ii(d,a,b,c,k[3],10, -1894986606);
    c =ii(c,d,a,b,k[10],15, -1051523);
    b =ii(b,c,d,a,k[1],21, -2054922799);
    a =ii(a,b,c,d,k[8],6, 1873313359);
    d =ii(d,a,b,c,k[15],10, -30611744);
    c =ii(c,d,a,b,k[6],15, -1560198380);
    b =ii(b,c,d,a,k[13],21, 1309151649);
    a =ii(a,b,c,d,k[4],6, -145523070);
    d =ii(d,a,b,c,k[11],10, -1120210379);
    c =ii(c,d,a,b,k[2],15, 718787259);
    b =ii(b,c,d,a,k[9],21, -343485551);

    x[0] = add32(a, x[0]);
    x[1] = add32(b, x[1]);
    x[2] = add32(c, x[2]);
    x[3] = add32(d, x[3]);
        //return Array(a,b,c,d);
}

function md5blk(s) { /* I figured global was faster.   */
    var md5blks = [], i; /* Andy King said do it this way. */
for (i=0; i<64; i+=4) {
    md5blks[i >> 2] = s[i]
    + (s[i +1] << 8)
    + (s[i +2] << 16)
    + (s[i +3] << 24);
    //md5blks[i>>2] = s.charCodeAt(i)
    //+ (s.charCodeAt(i+1) << 8)
    //+ (s.charCodeAt(i+2) << 16)
    //+ (s.charCodeAt(i+3) << 24);
}
    return md5blks;
}

function cmn(q,a,b,x,s,t) {
    a = add32(add32(a,q),add32(x,t));
    return add32((a<<s)|(a>>>(32-s)),b);
    //return safe_add(bit_rol(safe_add(safe_add(a,q),safe_add(x,t)),s),b);
}
function ff(a,b,c,d,x,s,t) {
    return cmn((b&c)| ((~b)&d), a,b,x,s,t);
}
function gg(a,b,c,d,x,s,t) {
    return cmn((b&d) |(c&(~d)),a,b,x,s,t);
}
function hh(a,b,c,d,x,s,t) {
    return cmn(b^c^d,a,b,x,s,t);
}
function ii(a,b,c,d,x,s,t) {
    return cmn(c^(b |(~d)),a,b,x,s,t);
}
function md51(s) {
    txt = '';
    var n = s.length,
    state = [1732584193, -271733879, -1732584194, 271733878], i;
for (i=64; i<=s.length; i+=64) {
    md5cycle(state, md5blk(s.substring(i-64, i)));
    //md5cycle(state, sb(s));
}
    s = s.substring(i-64);
    var tail = [0,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,0];
for (i=0; i<s.length; i++)
    tail[i>>2] |= s.charCodeAt(i) << ((i%4) << 3);
    tail[i>>2] |= 0x80 << ((i%4) << 3);
if (i > 55) {
    md5cycle(state, tail);
for (i=0; i<16; i++) tail[i] = 0;
}
    tail[14] = n*8;
    md5cycle(state, tail);
return state;
}
function md52(r){
//console.log("Function: "+r)
      txt="";
  var t,c=r.length,e=[1732584193,-271733879,-1732584194,271733878];
  for(t=64;t<=r.length;t+=64) 
      md5cycle(e,md5blk(r.substring(t-64,t)));
      r=r.substring(t-64);
  var n=[0,0,0,0,
         0,0,0,0,
         0,0,0,0,
         0,0,0,0];
  for(t=0;t<r.length;t++) 
      n[t>>2]|=r.charCodeAt(t)<<(t%4<<3);
  if(n[t>>2]|=128<<(t%4<<3),t>55)
      for(md5cycle(e,n),t=0;t<16;t++)n[t]=0;
  return n[14]=8*c,md5cycle(e,n),e
    }
    var hex_chr = '0123456789abcdef'.split('');
function sb(x) {
    var i;
    var nblk=((x.length+8)>>6)+1;
    var blks=new Array(nblk*16);
for(i=0;i<nblk*16;i++) blks[i]=0;
for(i=0;i<x.length;i++) blks[i>>2]|=x.charCodeAt(i)<<((i%4)*8);
    blks[i>>2]|=0x80<<((i%4)*8);
    blks[nblk*16-2]=x.length*8;
      //return blks;
}
function rhex(n) {
    var s='', j=0;
    for(; j<4; j++)
    s += hex_chr[(n >> (j * 8 + 4)) & 0x0F]
      + hex_chr[(n >> (j * 8)) & 0x0F];
    return s;
  }

function hex(x) {
    for (var i=0; i<x.length; i++)
    x[i] = rhex(x[i]);
    return x.join('');
}
function add32(x,y) {
    return (x + y) & 0xFFFFFFFF;
}
function rstring(s) {
    return "STRING";
}

function ran(n) {
    let s=n.split("");
    s.sort(()=> 
    0.5 - Math.random()
    );
  //console.log(s);
    s=s.join("");
    s=s.substring(0,15);
    //s=s.split("");
    
    let c="\"*':;,!?.@#$_&-+()";
    c=c.split("");
    c.sort(()=>
    0.5 - Math.random()
    );
    c=c.join("");
    c=c.substring(0,5);
    //let x=Math.floor(Math.random()*c.length);
    s=s+c;
    s=s.split("");
    s.sort(()=>
    0.5 - Math.random()
    );
    s=s.join("");

    c="ABCDEF";
    c=c.split("");
    c.sort(()=>
    0.5 - Math.random()
    );
    c=c.join("");
    c=c.substring(0,5);
    //x=Math.floor(Math.random()*c.length);
    s=s+c;
    s=s.split("");
    s.sort(()=>
    0.5 - Math.random()
    );
    s=s.join("");
    s=s.substring(0,20);
  //console.log(rnd(12));
    return s;
    //return s.toUpperCase();
}

function __get(name) {
    //eval(' '+dd+'');
return eval(
    `${name}`
)
}

function __set(
               name,
               value
              ) {
    //eval('let '+ll+'='+'"'+cc+'";');
  //console.log("Function: "+value)
return eval(
    `${name}=value`
)
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

var w=b(md5)("STRING");
//var w=b(md5);

    w=ran(w);

var end = performance.now();

//console.log(`Call took ${end - start} milliseconds`);
//Average: 0.8 to 2ms

console.log(
    w
);

__set('xx','valued');



//console.log("Function: "
    //+__get('xx')
//);

//let variable = `    
    //`;

__set("variable",`Function: 

`);
//console.log(__get("variable"));

__set('temp',`<!DOCTYPE html>
    <html>
    <head>
    <title>Title of the
    document</title>
    </head>
    <body>
    The content of the document......
    </body>
           
    </html>`
);

__set('html',`<!DOCTYPE html>
    <html>
    <head>
    <meta name="viewport" content="width=device-width,initial-scale=1">
    <style>
.collapsible {
background-color:cyan;
color:black;
cursor:pointer;
padding:18px;
width:100%;
border:none;
text-align:left;
outline:none;
font-weight:bold;
font-size:25px;
display:inline-block;
}
.active,collapsible:hover {
background-color:LightCyan;
}
.collapsible:after {
content:'\\002B';
color:white;
font-weight:bold;
float:right;
margin-left:5px;
}
.active:after {
content:"\\2212";
}

.content {
padding: 0 18px;
max-height: 0;
overflow: hidden;
transition: max-height 0.2s ease-out;
background-color: LightCyan;
}

</style>
</head>
<body>

<h2>A simple website by Nathan St</h2>

<p>Collapsible Set:</p>
<button class="collapsible">Open Section 1</button>
<div class="content">
<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
<button class="collapsible">Open Children 1</button>
<div class="content"><p>Insert some content here</p>
</div>

</div>
<button class="collapsible">Open Section 2</button>
<div class="content">
<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
</div>
<button class="collapsible">Open Section 3</button>
<div class="content">
<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
</div>

<script>
var allHeights =0;
var contents=document.getElementsByClassName("content");
var j;
for(j=0;j<contents.length;j++) {
var h=document.getElementsByClassName("content")
[j].scrollHeight;
allHeights+=h;
}


var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    //if (content.style.maxHeight){
    if (content.style.maxHeight==allHeights+"px") {
      //content.style.maxHeight = null;
content.style.maxHeight="0px";
    } else {
      //content.style.maxHeight = content.scrollHeight + "px";
content.style.maxHeight=allHeights+"px"; 
    }
  });
}
<\/script>

</body>
</html>`
);
//console.log("Function: "+html)
document.write(html);
//console.log("Function: "+temp)
//console.log(`Function: `
    //+__get('temp')
//)
    //b(md5)()
    //w.md5("STRING")
    //ran(w.md5("STRING"))

//const b=c(f);
//const a=c;
//b(f)();

  //function b(x){
    //return function(y) {
      //return x(y)
    //}
  //}

//function f() {
   //console.log("Function: "+this)
// console.log("Function: "+b)
//}

//const b = 
  //i(f);
//const b =
  //void c(f)();
//b();

//function x(){
//}
//function y(){
  //x(y)
//}