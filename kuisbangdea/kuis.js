const x = [3,5,12];
let a=0;
let b=0;
let c=0;

for(let i = 0; i<x.length;i++){
        if(i===0){
            a+= parseInt(x[i]);
        } else if(i===1){
            b+= parseInt(x[i]);
        } else{
            c+= parseInt(x[i]);
        }
}

let d = a+b+c;

console.log(`${a} + ${b} + ${c} = ${d}`)