function cariModus(arr){
    arr.sort((a,b)=>a-b);
    let arrBaru =[], issame=false, hasil;
    for(let i = 0 ; i <arr.length;i++){
        for(let j = i+1; j< arr.length;j++){
            
            if (arr[i]===arr[j]){
                issame=true;
                arrBaru.push(arr[i]);
            }else{
                issame=false;
            }
        }
        
    }

    if(arrBaru[0]=== undefined||arrBaru[0]===issame){
        hasil=-1;
    }else{
        hasil = arrBaru[0];
    }

    return hasil;
}



//TEST CASES
console.log(cariModus([10, 4, 5, 2, 4])); // 4
console.log(cariModus([5, 10, 10, 6, 5])); // 5
console.log(cariModus([10, 3, 1, 2, 5])); // -1
console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
console.log(cariModus([7, 7, 7, 7, 7])); // -1