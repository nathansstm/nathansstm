

let p,a,r,e,n,t;
(
    (r) => r(r)
)
(
    (r) => 
    (e) => {
        if (typeof(e)==="function") e=e()
        if (e.length) r(r)(e.slice(1))
    }
)
(
    (n) => [
        1,
        2,
        3,
        4
    ]
)
//console.log(
    //"test object="
    //+returnRest()
    //.getReturn()
//);


