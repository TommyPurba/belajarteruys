function countZeros(n) {
  let faktor = BigInt(1);
if(n % 2 == 0) {
  for(let i = 2; i <= n; i+= 2) {
    faktor *= BigInt(i);
  }
} else {
  for (let i = 1; i <= n; i += 2) {
    faktor *= BigInt(i);
  }
}

let str = faktor.toString();
let jumlahNol = 0;
for(let i = str.length - 1; i >= 0; i--) {
  if(str[i] == '0') {
    jumlahNol += 1;
  } else {
    break
  }
}
return jumlahNol
}