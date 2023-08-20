/*
================
MISSING NUMBER
================

description: Sebuah fungsi untuk mencari angka yang hilang berdasarkan pola dari board atau
papan yang tersedia. Fungsi akan mengembalikan nilai sebuah array yang berisi
angka-angka yang hilang

examples:
INPUT = 
[
  [ 7 ,' ', 5 ],
  [' ', 8 , 9 ]
  [ 1 ,' ',' '] 
]

ASUMSI PADA PAPAN SUDAH TERDAPAT RANGE TERBESAR DAN TERKECIL YAITU 1 DAN 9 SEHINGGA
OUTPUT:
[ 2, 3, 4, 6]

PADA MASING-MASING TEST CASE SUDAH TERDAPAT RANGE TERBESAR DAN TERKECIL
*/

function missingNum(arr) {

    if(arr.length === 0){
        return []
    }


    const nilaiBesar = Math.max(...arr.flat().filter(value => typeof value==='number'));
    const nilaiKecil = Math.min(...arr.flat().filter(value => typeof value==='number'))

    const nilai=[];

    for(let num= nilaiKecil+1; num < nilaiBesar; num++){
        if(!arr.flat().includes(num)){
            nilai.push(num)
        }
    }
    return nilai;


    // console.log(arr.join(","));
    // let arrBaru = arr.join(',');
    // let nilaiBaru=[];
    // for(let i=0;i<arr.length;i++){
    //     for(let j =0 ; j<arr[i].length;j++){
    //         if(arr[i][j]!== ' '){
    //             nilaiBaru.push(arr[i][j])
    //         }
    //     }
        
    // }
    // let c = Math.max(...nilaiBaru);
    // let d = Math.min(...nilaiBaru);

    // for(let x = 0; x<arr.length)
    // console.log(d);
    // console.log(nilaiBaru.length)
   
   
    // for(let i=0;i<arrBaru.length;i++){
    //     if(arrBaru[i]!=''){
    //         hasil.push(arrBaru[i]);
    //     }
    // }
   
  }
  
  
  console.log(missingNum([
    [3, ' ', 5],
    [1, ' ', 7],
    [9, ' ', ' ']
  ])) // [ 2, 4, 6, 8 ]
  console.log(missingNum([
    [2, ' '],
    [' ', 5]
  ])) // [ 3, 4 ]
  console.log(missingNum([
    [11, ' ', 13],
    [17, ' ', 19],
    [' ', 16, ' ']
  ])) // [ 12, 14, 15, 18 ]
  console.log(missingNum([
    [3, ' ', 5, 15],
    [1, ' ', 7, 13],
    [9, ' ', ' ', 12],
    [' ', 16, ' ', ' ']
  ])) // [ 2, 4, 6, 8, 10, 11, 14 ]
  console.log(missingNum([])) // []