let arr = [1, 3, 1, 2, 4, 6, 2];
for (let k = 0; k < arr.length; k++) {
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] > arr[i+1]) {
            let tmp = arr[i];
            arr[i] = arr[i + 1];
            arr[i + 1] = tmp;
        }
    }
}

console.log(arr);