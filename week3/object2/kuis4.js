/*
Diberikan sebuah function checkAB(str) yang menerima satu parameter berupa string. function tersebut mengembalikan nilai true jika di dalam string tersebut terdapat karakter a dan b yang memiliki jarak 3 karakter lain minimal satu kali. Jika tidak ditemukan sama sekali, kembalikan nilai false. Jarak bisa dari a ke b, atau b ke a.

contoh:
barbarian kenapa bisa true?
karena di bagian 'barian' terdapat b dipisah 3 karakter ari(totalnya 3) dan ketemu a

Spasi juga dianggap sebagai karakter
*/

function checkAB(num) {

    let newNum = num.split(" ").join("");
    console.log(newNum)
    let hasil,nilai;
    for(let i=0;i<num.length;i++)
        {
           if(num[i]==='a' && num[i+4] === "b" || num[i]==='b' && num[i+4] === "a"){
            hasil=true;
           }else{
            nilai=false;
           }
                      
        }

        if(hasil === true || nilai === true){
            return hasil;
        }else{
            return nilai;
        }
            


  }

// TEST CASES
console.log(checkAB('lane borrowed')); // true
console.log(checkAB('i am sick')); // false
console.log(checkAB('you are boring')); // true
console.log(checkAB('barbarian')); // true
console.log(checkAB('bacon and meat')); // false
  