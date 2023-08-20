function groupAnimals(animals) {
    // you can only write your code here!
    let sari= animals.sort();
    let aarrayBaru=[];
    let benar=[];
    for(let i=0; i<sari.length;i++){
       
        if(i === 0){
            aarrayBaru.push(sari[i]);
            continue;// mengabaikan perulanagn i apabila i 0 dan akan lanjut/melompati nilai 0 dan teruskan ke 1 - length array terakhir
        }
        if(sari[i][0]!== aarrayBaru[0][0] || i === sari.length-1){// kondisi true ketika huruf pertama tidak sama dengan huruf pertam dengan lain atau hasil i sama dengan jumlah panjang array yang dikurang 1
            benar.push(aarrayBaru); // ini push ke variabel benar ketika kondisi true
            aarrayBaru=[sari[i]];//value baru buat ketika tidak cocok utnk kondisi huruf contoh a != b maka akan menjadi value baru di aarayBaru
            
         }else{
            aarrayBaru.push(sari[i]); // ini push ke aarray baru jika kondisi huruf pertam sama dengan huruf pertama animal lain
         }
    }
    benar.push(aarrayBaru);//ini karena masih ada sisa hewan di penampung
    return benar;

  }

// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]