function palindrome(kata) {
    let a='';  // variabel sebagai penampung baru untuk kata yang telah di reverword

    //dibawa ini melakukan perulangan agar membaca tiap string , dan ketika di print akan mengambil tiap kata dari belakang
    
    for(let i =kata.length-1; i>=0 ; i--) {    
        a += kata[i];
    }

    //kondisi untuk mengecheck true apbila kata sama dan false tidak
    if(a===kata){
        console.log("true");
    }else{
        console.log("false");
    }

  }

palindrome('katak');// true
palindrome('blanket'); // false
palindrome('civic'); // true
palindrome('kasur rusak'); // true
palindrome('mister'); // false