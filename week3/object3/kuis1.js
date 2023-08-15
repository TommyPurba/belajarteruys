function changeMe(arr){
    let hasil={};
    let nama ="";
     if(arr.length===0){
        return '" "';
     }else{
        // return nama;
        for(let i = 0; i<arr.length;i++){
           let umur=0;
                if((2023 - arr[i][3]).toString() === 'NaN'){
                    // console.log((2023 - arr[i][3]));
                    umur = "'Invalid Birth Year'";
                    // console.log(umur,2);
                }else{
                    umur = (2023 - arr[i][3]);
                    // console.log(umur,1);
                }
                nama += `${arr[i][0]} ${arr[i][1]} : {firstName: '${arr[i][0]}', \n lastName : '${arr[i][1]}', \n gender : ${arr[i][2]}, \n age: ${umur} 
                } \n`;
                // console.log(nama);
         
        }
        return nama;
     }
  
}


// TEST CASES
console.log(changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']])); // 1. Christ Evans:
// Christ Evans: { firstName: 'Christ',
//   lastName: 'Evans',
//   gender: 'Male',
//   age: 41 } 2023 - 1982 = 41 kan yak wkwk
// Robert Downey: { firstName: 'Robert',
//   lastName: 'Downey',
//   gender: 'Male',
//   age: 'Invalid Birth Year' }

console.log(changeMe([])); // ""