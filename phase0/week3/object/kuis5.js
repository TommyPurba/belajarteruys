function ubahHuruf(kata) {
    let chars = "abcdefghijklmnopqrstuvwxyz";
    let hasil ='';

    for(let i=0; i<kata.length;i++){
        for(let j = 0; j<chars.length;j++){
            if(kata[i]===chars[j]){
                hasil += chars[j+1];
            }
            // console.log(`${kata[i]===chars[j]}, ${i}, ${j}`);
        }
    }
    return hasil;
}

console.log(ubahHuruf('wow')); // xpx
console.log(ubahHuruf('developer')); // efwfmpqfs
console.log(ubahHuruf('javascript')); // kbwbtdsjqu
console.log(ubahHuruf('keren')); // lfsfo
console.log(ubahHuruf('semangat')); // tfnbohbu