function highestScore (students) {
    // Code disini
    let result={};
    for(let i=0; i<students.length;i++){
        const murid = students[i]; // mengapa let, karena ini mengambil value 1 saja tidak booleh public tidak diubah kecuali perulangan berjalan, jadi const a = as[1] artinya dalam const hanya privete satu aja dan tidak publik, ketika pengambilan data hanya data tertampil karena bersifat tetap atau private
        //unutk masuk kekondisi dichcek dulu apa di result sudah memiliki class atau belum, kalau belum masuk kedalam valuenya, dibagain result[student.clas], dan kalau class sudah terisi untuk salah satu class, dicheck untuk scorenya, kalau lebih besar dari score masuk kalau tidak, dibuang saja
        if(!( murid.class in result) || murid.score> result[murid.class].score ){
            result[murid.class]={
                name : murid.name,
                score : murid.score,
            }
        }
    }
    return result;
  }
  
  // TEST CASE
  console.log(highestScore([
    {
      name: 'Dimitri',
      score: 90,
      class: 'foxes'
    },
    {
      name: 'Alexei',
      score: 85,
      class: 'wolves'
    },
    {
      name: 'Sergei',
      score: 74,
      class: 'foxes'
    },
    {
      name: 'Anastasia',
      score: 78,
      class: 'wolves'
    }
  ]));
  
  // {
  //   foxes: { name: 'Dimitri', score: 90 },
  //   wolves: { name: 'Alexei', score: 85 }
  // }
  
  
  console.log(highestScore([
    {
      name: 'Alexander',
      score: 100,
      class: 'foxes'
    },
    {
      name: 'Alisa',
      score: 76,
      class: 'wolves'
    },
    {
      name: 'Vladimir',
      score: 92,
      class: 'foxes'
    },
    {
      name: 'Albert',
      score: 71,
      class: 'wolves'
    },
    {
      name: 'Viktor',
      score: 80,
      class: 'tigers'
    }
  ]));
  
  // {
  //   foxes: { name: 'Alexander', score: 100 },
  //   wolves: { name: 'Alisa', score: 76 },
  //   tigers: { name: 'Viktor', score: 80 }
  // }
  
  
  console.log(highestScore([])); //{}