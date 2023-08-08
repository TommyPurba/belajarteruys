let input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];

function dataHandling2(input) {
let a,b,c,d,e,f,g,h,i,j,x,z;
g = input[1] ;
a=(g+ "Elsharawy ");
c = ("Provinsi " + input[2]);
d=input;
d.splice(1,2) && d.splice(1, 0, a, c) && d.splice(4,0, "Pria", "SMA Internasional Metro");
d.pop();

b= input[1].toString().split("");
if(b[4]=5){
    b="mei";
}

e = input[3];

[h, i, j] = e.split("/");
z = [j,i,h];

x = e.split("/");

f = `${x[0]}-${x[1]}-${x[2]}`;





console.log(d);
console.log(b);
console.log(z);
console.log(f);
console.log(g);
}

dataHandling2(input);

/**
 * keluaran yang diharapkan (pada console)
 *
 * ["0001", "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro"]
 * Mei
 * ["1989", "21", "05"]
 * 21-05-1989
 * Roman Alamsyah //batasi hanya 15 karakter saja pada array elemen ke 2
 */