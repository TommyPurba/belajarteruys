function graduates(students) {
    // Code disini
    let result = {} // buat penampung untuk hasil dari condisi dibawa
    for(let i =0;i<students.length;i++){ // lakukan perulangan untuk memasukkan data ke variabel baru(const)
        const student = students[i]; // masukkan kedalam variabel const, agar data yang diambil satu persatu, dan ketika melakuakn pengondisian hanya tebaca 1
        if(!result[student.class]){ // dicheck dulu untuk kodisi pertam apabila tidak ada isi di result untuk class, maka akan menghasil kan []
            result[student.class]= [];
        }

        if(student.score>75){ // setelah kodisi pertama check di check lagi kondisi, setelah object sudah terisi maka dicheck untuk scorenya apakah meleihi 75
          
            result[student.class].push({ // setelah kondisi score lebih 75 selanjutnya push data untuk name dan score, serta membuat push array hanya untuk kelas. agar terbaca utnuk kelas hanya object saja
                name : student.name,
                score: student.score,
            });
        }
    }
    return result;// kemudian di return untuk mengembalikan data dari variabel
  }
  
  console.log(graduates([
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
  //   foxes: [
  //     { name: 'Dimitri', score: 90 }
  //   ],
  //   wolves: [
  //     { name: 'Alexei' , score: 85 },
  //     { name: 'Anastasia', score: 78 }
  //   ]
  // }
  
  console.log(graduates([
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
  //   foxes: [
  //     { name: 'Alexander', score: 100 },
  //     { name: 'Vladimir', score: 92 }
  //   ],
  //   wolves: [
  //     { name: 'Alisa', score: 76 },
  //   ],
  //   tigers: [
  //     { name: 'Viktor', score: 80 }
  //   ]
  // }
  
  
  console.log(graduates([])); //{}