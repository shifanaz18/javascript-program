function min(arr) {
    let min = arr[0];
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
        if (arr[i] > max) {
            max = arr[i];
        }

    }
    return [min, max];
}

function isnested(arr1, arr2) {
    let minmax1 = min(arr1);
    let minmax2 = min(arr2);

    if (minmax1[0] > minmax2[0] && minmax1[1] < minmax2[1])
        return true;
    else
        return false;
}

console.log(isnested([9, 9, 8], [8, 9]));
