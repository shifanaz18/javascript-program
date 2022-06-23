function doubleChar(str) {
    let newstr = '';
    for (let i = 0; i < str.length; i++) {
        newstr = newstr + str[i] + str[i];
    }
    return newstr;
}

console.log(doubleChar('baby'));