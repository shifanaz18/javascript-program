function lonelyNumber(arr) {
    for (let i = 0; i < arr.length; i++) {
        let pair = -(arr[i])
        let found = false;
        for (let j = 0; j < arr.length; j++) {
            if (arr[j] == pair) {
                found = true;
                break
            }
        }
        if (found == false)
            return arr[i];
    }
}


let arr = [1, 2, 3, 4, -4, -3, -1]
console.log(lonelyNumber2(arr))


function lonelyNumber2(arr) {
    for (let i = 0; i < arr.length; i++) {
        let pair = -(arr[i])
        let found = arr.includes(pair);
        if (found == false)
            return arr[i];
    }
}
