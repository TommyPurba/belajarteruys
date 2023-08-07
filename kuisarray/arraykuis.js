let input = [
                ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
                ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
                ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
                ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"]
            ];

function dataHandling(nilai) {
    let a,b,c,d,e;
  

    for(let i=0; i<nilai.length;i++){
                a = ` Nomor Id : ${nilai[i][0]} \n`;
                b = ` Nama Lengkap: : ${nilai[i][1]} \n`;
                c = ` TTL: ${nilai[i][2]}, ${nilai[i][3]} \n`;
                d = ` hobi: : ${nilai[i][4]} \n`;
                e+= `${a}${b}${c}${d}`;
    }
    return e;

    
}

console.log(dataHandling(input));