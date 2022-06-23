function findWovels(str) {
    let vowelstr = 'aeiou';
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (vowelstr.includes(str[i])) {
            count++;
        }

    }
    return count;

}

console.log(findWovels('ahmed anwar'));