function targetTerdekat(arr) {
    let b = arr.indexOf('o');
    if (b===-1 || arr.indexOf('x')===-1){
        return 0;
    }

    let x=Infinity;

    for (let i = 0 ; i<arr.length;i++){
        if(arr[i]==='x'){
            const a=Math.abs(i-b);
            x=Math.min(x, a);

        }
    }
    return x;
  }

  console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
  console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
  console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
  console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
  console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2