function angkaPalindrome(num) {
    
    for( let a=0,b=1 ; a!==b; ){
      num++
        let c = num.toString();
        a = parseInt(c.slice(0, Math.ceil(c.length/2)));
        b = parseInt(c.slice(Math.floor(c.length/2), c.length).split("").reverse().join(""));
    }
   
    return num ;
  }

  console.log(angkaPalindrome(8)); // 9
console.log(angkaPalindrome(10)); // 11
console.log(angkaPalindrome(117)); // 121
console.log(angkaPalindrome(175)); // 181
console.log(angkaPalindrome(1000)); // 1001