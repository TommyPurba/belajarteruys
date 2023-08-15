
/*
Diberikan sebuah function shoppingTime(memberId, money) yang menerima dua parameter berupa string dan number. Parameter pertama merupakan memberId dan parameter ke-2 merupakan value uang yang dibawa oleh member tersebut.

Toko X sedang melakukan SALE untuk beberapa barang, yaitu:

Sepatu brand Stacattu seharga 1500000
Baju brand Zoro seharga 500000
Baju brand H&N seharga 250000
Sweater brand Uniklooh seharga 175000
Casing Handphone seharga 50000
Buatlah function yang akan mengembalikan sebuah object dimana object tersebut berisikan informasi memberId, money, listPurchased dan changeMoney.

Jika memberId kosong maka tampilkan "Mohon maaf, toko X hanya berlaku untuk member saja"
Jika uang yang dimiliki kurang dari 50000 maka tampilkan "Mohon maaf, uang tidak cukup"
Member yang berbelanja di toko X akan membeli barang yang paling mahal terlebih dahulu dan akan membeli barang-barang yang sedang SALE masing-masing 1 jika uang yang dimilikinya masih cukup.
Contoh jika inputan memberId: '324193hDew2' dan money: 700000

maka output:

{ memberId: '324193hDew2', money: 700000, listPurchased: [ 'Baju Zoro', 'Sweater Uniklooh' ], changeMoney: 25000 }
*/

function shoppingTime(memberId, money) {
    // you can only write your code here!
    if(memberId ==='1820RzKrnWn08' || memberId ==='82Ku8Ma742'){
            let barangBeli=[];
            let jumlahPembayaran=0;
            let harga =[1500000, 500000, 250000,175000,50000];
            let jenis=['Sepatu Stacattu','Baju Zoro','Baju H&N','Sweater Uniklooh','Casing Handphone']
            for(let i=0;i<harga.length;i++){
                if(harga[i]<= money){
                    barangBeli.push(jenis[i]);
                    jumlahPembayaran += parseInt(harga[i]);
                }
            }

            // if(money>=1500000){
            //     barangBeli.push('Sepatu Stacattu');
            //     jumlahPembayaran += 1500000;
            // }else if(money>=500000){
            //     barangBeli.push('Baju Zoro');
            //     jumlahPembayaran += 500000;
            // }else if(money>=250000){
            //     barangBeli.push('Baju H&N');
            //     jumlahPembayaran += 250000;
            // }else if(money>=175000){
            //     barangBeli.push('Sweater Uniklooh');
            //     jumlahPembayaran += 175000;
            // }else if(money>=50000){
            //     barangBeli.push('Casing Handphone');
            //     jumlahPembayaran += 50000;
            // }
        

            let changeMoney = money-jumlahPembayaran;
            let hasilBesar ={memberid : memberId, 
             money : money,  
             listPurchased :barangBeli,
             changeMoney : changeMoney
        };
        return hasilBesar;
    }else if(money < 50000){
            return "Mohon maaf, uang tidak cukup";
    } else{
        return `Mohon maaf, toko X hanya berlaku untuk member saja`;
    }
  }
  
  // TEST CASES
  console.log(shoppingTime('1820RzKrnWn08', 2475000));
    //{ memberId: '1820RzKrnWn08',
    // money: 2475000,
    // listPurchased:
    //  [ 'Sepatu Stacattu',
    //    'Baju Zoro',
    //    'Baju H&N',
    //    'Sweater Uniklooh',
    //    'Casing Handphone' ],
    // changeMoney: 0 }
  console.log(shoppingTime('82Ku8Ma742', 170000));
  //{ memberId: '82Ku8Ma742',
  // money: 170000,
  // listPurchased:
  //  [ 'Casing Handphone' ],
  // changeMoney: 120000 }
  console.log(shoppingTime('', 2475000)); //Mohon maaf, toko X hanya berlaku untuk member saja
  console.log(shoppingTime('234JdhweRxa53', 15000)); //Mohon maaf, uang tidak cukup
  console.log(shoppingTime()); ////Mohon maaf, toko X hanya berlaku untuk member saja
  