let baris = 5;
let pola1="";
let pola2="";
let pola3="";
let pola4="";
let pola5="";
let pola6="";
let pola7="";


console.log("persegi");
for(let i =1 ;i<=baris;i++){
    for(let b = 1 ; b<=3;b++)
    {
        pola1 += "*";
    }
    pola1 += "\n";
}
console.log(pola1);

console.log("segita siku sudut lancip di kanan");

for(let i =1 ;i<=baris;i++){
    for(let b = 1 ; b<=i;b++)
    {
        pola2 += "*";
    }
    pola2 += "\n";
}

console.log(pola2);

console.log("segita siku terbalik");

for(let i =1 ;i<=baris;i++){
    for(let b = baris ; b>=i;b--)
    {
        pola3 += "*";
    }
    pola3 += "\n";
}

console.log(pola3);

console.log("segita siku lawan arah");

for(let i =1 ;i<=baris;i++){
    for(let c =baris-1; c>=i;c--){
        pola4 += " ";
    }

    for(let b = 1 ; b<=i;b++)
    {
        pola4 += "*";
    }
    pola4 += "\n";
}

console.log(pola4);


console.log("segitiga sama kaki");

for(let i =1 ;i<=baris;i++){
    for(let c =baris-1; c>=i;c--){
        pola4 += " ";
    }

    for(let b = 1 ; b<=i;b++)
    {
        pola4 += "*";
    }
    pola4 += "\n";
}

console.log(pola4);