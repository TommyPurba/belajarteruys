let nama = "", peran = "";
nama="rina";
peran="ksatria";

//code disini gunakan console.log untuk outputnya

if(nama===nama){
    console.log(`lanjutkan pemilihan peran mu ${nama}`);
}else{
    console.log("silakan isi nama dulu");
}
console.log(`peran mu adalah ${peran}, lanjutkan berperang ${nama}`);
if(peran==="ksatria"){
    console.log(`halo Ksatria ${nama} , kamu dapat menyerang dengan senjatamu!`);
}else if(peran==="tabib"){
    console.log(`halo Tabib ${nama} , kamu akan membantu temanmu yang terluka`);
}else if(peran=="penyihir"){
    console.log(`halo Penyihir ${nama} , ciptakan keajaiban yang membantu kemenanganmu!`);
}