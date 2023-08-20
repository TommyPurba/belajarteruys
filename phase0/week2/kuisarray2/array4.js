function pasanganTerbesar(num) {
    let arr=0;
    let Nilai = num.toString().split("");

    for(let i=0; i< (Nilai.length-1);i++){
        if (i === 0){
            arr = Nilai[i] + Nilai[i+1];
        }else if(arr < parseInt(Nilai[i] + Nilai[i+1])){
            arr= parseInt(Nilai[i] + Nilai[i+1]);
        }
    }
  
    return parseInt(arr);
  }

  console.log(pasanganTerbesar(641573)); // 73
console.log(pasanganTerbesar(12783456)); // 83
console.log(pasanganTerbesar(910233)); // 91
console.log(pasanganTerbesar(71856421)); // 85
console.log(pasanganTerbesar(79918293)); // 99