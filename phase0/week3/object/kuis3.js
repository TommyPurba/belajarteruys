function cariMedian(arr){
    let arrBaru = arr.sort((a,b)=>a-b);
    let hasil=0;
    hasil = Math.floor((arrBaru.length+1)/2);

    if(arr.length%2===0){
        hasil = (arr[hasil-1]+arr[hasil])/2
    }else{
        hasil = arr[hasil-1];
    }

    return hasil;
}

// TEST CASES
console.log(cariMedian([1, 2, 3, 4, 5])); // 3
console.log(cariMedian([1, 3, 4, 10, 12, 13])); // 7
console.log(cariMedian([3, 4, 7, 6, 10])); // 6
console.log(cariMedian([1, 3, 3])); // 3
console.log(cariMedian([7, 7, 8, 8])); // 7.5