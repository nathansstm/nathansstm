let p,a,r,e=[,],n=[{needs:1},],t,s;

let m=[]; //Push all modules to: m
//Refactor this, Use `mode` worker
//Refactor this, Use `mode` writer
//I.e we want a template worker(), or [object Object] writer

console.log(toString(e));
(
 e.push(
    [,,,
    [[,],],
    [[,],],
    [,,,,,,,,,
        [[{export:{},},],],
        [["export",],],
        [[true,],n,],,,,
     ],
    ]
   )
);
            //The only design type here uses multidimensional
          //Array [object Object] above

(
function loop(p) {
            //if(toString(p)==="[object Object]")
             //console.log("Find export: "+p);
    if(n=p,Array.isArray(n)){

      n.forEach((key, item) => {
          //console.log("Looping at key: "+key+", "+item);
             if(typeof(key==="object"))
                t=item+2;
             
        
            if(Array.isArray(key)){
                key.forEach((keys, value) => {
                    if(Array.isArray(keys)){
                        //console.log("Next items: "
                        //+keys[value]
                        //+", count: "
                        //+value
                        //+", required: "
                        //+keys[value]
                        //+", keys: "
                        //+keys[value]
                        //+", t:"
                          //+t);
                      if(keys[value]=="export")
                      console.log("Found module: "+keys[value]);
                      if(keys[value]=="[object Object]")
                      console.log("Found module: "+keys[value]);
                      if(keys[value]==true)
                      console.log("Found needs: "+keys[value]);
                    
                        loop(keys);
                    }
                    else
                    {
                        //console.log("Pushing keys: "+keys+", "+value);

                        if(typeof(keys)&&keys==="export")
                        console.log("Iteration item: "+t)
                    }
                });
            }
            else
            {
                //if(typeof(key)==="object")
                //console.log("Iteration items: "+item)
                //console.log("Pushing key: "+key);
            }
      });
    }
}
)
(
  e
)