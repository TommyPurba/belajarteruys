/*
Diberikan function naikAngkot(listPenumpang) yang akan menerima satu parameter berupa array dua dimensi. Function akan me-return array of object.

Diberikan sebuah rute, dari A - F. Penumpang diwajibkan membayar Rp2000 setiap melewati satu rute.

Contoh: input: [['Dimitri', 'B', 'F']] output: [{ penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 }]
*/

function naikAngkot(arrPenumpang) {
    rute = ['A', 'B', 'C', 'D', 'E', 'F'];
    //     let c=[];
       
    // for(let i = 0; i<arrPenumpang.length;i++){
    //         c += (rute.indexOf(arrPenumpang[i][1])).toString() + (rute.indexOf(arrPenumpang[i][2])).toString();
            
    // }
    // console.log(c[1]);
    let result =[];
    for(let j = 0; j<arrPenumpang.length;j++){
            
                    result.push({
                        penumpang : arrPenumpang[j][0],
                        naikDari  : arrPenumpang[j][1],
                        tujuan : arrPenumpang[j][2],
                        bayar : ((rute.indexOf(arrPenumpang[j][2])-rute.indexOf(arrPenumpang[j][1]))*2000)
                    });
            
    }

    return result;
    //your code here
  }
  
  //TEST CASE
  console.log(naikAngkot([['Dimitri', 'B', 'F'],['Icha', 'A', 'B']]));
  // [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
  //   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]
  
  console.log(naikAngkot([])); //[]