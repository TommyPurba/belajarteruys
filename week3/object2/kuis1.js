/*
Diberikan sebuah function digitPerkalianMinimum(angka) yang menerima satu parameter angka. Function akan mengembalikan jumlah digit minimal dari angka yang merupakan faktor angka parameter tersebut, Contoh, jika angka adalah 24, maka faktornya adalah 1 * 24, 2 * 12, 3 * 8, dan 4 * 6. Dari antara faktor tersebut, yang digit nya paling sedikit adalah 3 * 8 atau 4 * 6, sehingga function akan me-return 2.

1 * 24 = 3 digit (124)
3 * 8 = 2 digit (38)
4 * 6 = 2 digit (46)

karena dibawah ini 2 digit dan terkecil
3 * 8 = 2 digit (38)
4 * 6 = 2 digit (46)

ya jadikan dia minimum

misal faktronya angka 1 hanyalah
1*1 = 2 digit (11)

Return 2
*/
function digitPerkalianMinimum(angka) {
    let isi='';
    let nilai1=[], nilai2=[], nilai3=[], nilai4=[], hasil=[];


    for(let i = 1;i<=angka;i++){
        nilai1.push(i);
    }

    for(let j = angka;j>=1;j--){
        nilai2.push(j);   
    }
    for(let a = 0;a<=angka;a++){


            if(angka%nilai1[a]===0 ){
              nilai3.push(nilai1[a]);
             }
              if(angka%nilai2[a]===0){
              nilai4.push(nilai2[a]);
            }
    }

    for(let x=0;x<nilai4.length;x++){
        isi = `${nilai3[x]}${nilai4[x]}`

        hasil.push(isi);
        
    }
    hasil.sort((a, b) => parseInt(a, 10) - parseInt(b, 10));
    for(let y=0;y<hasil.length;y++){
        if(hasil[y].length<=2){
            return hasil[y].length;
        }else if(hasil[y].length<=4){
            return hasil[y].length;
        }
    }
    

 
  }
  
  console.log(digitPerkalianMinimum(24)); // 2
  console.log(digitPerkalianMinimum(90)); // 3
  console.log(digitPerkalianMinimum(20)); // 2
  console.log(digitPerkalianMinimum(179)); // 4
  console.log(digitPerkalianMinimum(1)); // 2