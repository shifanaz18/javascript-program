function removeDups(arr) {
    let out = [];
    for (let i = 0; i < arr.length; i++) {
        if (!out.includes(arr[i]))
            out.push(arr[i]);

    }
    return out;
}

let arr = [1, 2, 3, 4, 4, 2, 8, 9]
console.log(removeDups(arr))


function removeDups2(arr) {
    let out = [...new Set(arr)];

    return out;
}

let arr = [1, 2, 3, 4, 4, 2, 8, 9]
console.log(removeDups(arr))

