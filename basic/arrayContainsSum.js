function arrayContainsSum(arr, sum) {
    let out = [];
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if ((arr[i] + arr[j]) == sum)
                out.push([arr[i], arr[j]]);
        }

    }
    return out;
}

let arr = [1, 2, 3, 4, 5, 6, 7, 9]
console.log(arrayContainsSum(arr, 9))
