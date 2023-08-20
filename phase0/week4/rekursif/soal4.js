function kaliTerusRekursif(angka) {
    
   let angkaNew = angka.toString().split('');

   if(angkaNew.length===1){
     return parseInt(angkaNew);
   }else{
       
    angkaNew = angkaNew.reduce((a,b)=> a * b);
        
       return kaliTerusRekursif(angkaNew);
    }
  }

  // TEST CASES
console.log(kaliTerusRekursif(66)); // 8
console.log(kaliTerusRekursif(3)); // 3
console.log(kaliTerusRekursif(24)); // 8
console.log(kaliTerusRekursif(654)); // 0
console.log(kaliTerusRekursif(1231)); // 6