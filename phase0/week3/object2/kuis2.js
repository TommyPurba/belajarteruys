function urutkanAbjad(str){
    let arr = str.split("");

    for(let i=0; i<arr.length; i++){
        for(let j=0; j< (arr.length-i-1);j++){
            if(arr[j] > arr[j+1]){
                let hasil = arr[j];
                arr[j]=arr[j+1];
                arr[j+1] = hasil ;
            }
        }
    }
    
    return arr.join("");
}
console.log(urutkanAbjad('developer'));