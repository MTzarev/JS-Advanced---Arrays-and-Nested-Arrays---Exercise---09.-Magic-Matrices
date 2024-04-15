function magicMatrices(array) {
    let rowSum = [];
    let columnSum = [];
       
    for (let i = 0; i < array.length; i++) {
        let sum = array[i].reduce((a, b) => a + b);
        rowSum.push(sum);
    }


    for (let i = 0; i < array.length; i++) {
        let sum = 0;
        for (let j = 0; j < array.length; j++) {
            sum += array[j][i]; 
        }
        columnSum.push(sum);
    }
    let finalArr = rowSum.concat(columnSum);
    return finalArr.every((el, i, arr)=> el===arr[0]);
    // for (let i = 0; i < finalArr.length; i++) {
    //     if (finalArr[i] !== finalArr[i + 1]) {
    //         return false;
    //     } else {
    //         return true;
    //     }

    
}
console.log(magicMatrices([[1, 0, 0],
    [0, 0, 1],
    [0, 1, 0]]));



