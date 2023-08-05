let hari = 21; let bulan = 1; let tahun = 200;
let x, y, z;
switch (true){
    case hari >=1 && hari <=31 :
         x = hari ;
        break;
    default:
    x="tanggal";
}
switch (bulan) {
    case 1:  y = "Januari";   break;
    case 2:  y = "Februari";  break;
    case 3:  y = "Maret";     break;
    case 4:  y = "April";     break;
    case 5:  y = "Mei";       break;
    case 6:  y = "Juni";      break;
    case 7:  y = "Juli";      break;
    case 8:  y = "Agustus";   break;
    case 9:  y = "September"; break;
    case 10: y = "Oktober";   break;
    case 11: y = "November";  break;
    case 12: y = "Desember";  break;
    default: y = "bulan";
   }
switch (true){
    case tahun >=1900 && tahun <=2200 :
         z = tahun;
        break;
    default:
    z="tahun";
}


if(typeof (x,y,z) === "number"){
    console.log(`${x} ${y} ${z}`);
}else{
    console.log(`masih ada salah format boleh di check kembali`);
}