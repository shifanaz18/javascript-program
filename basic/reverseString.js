function reverseString(str) {
    let newstr = '';
    for (let i = (str.length - 1); i >= 0; i--) {
        newstr = newstr + str[i];
    }
    return newstr;
}


console.log(reverseString('ShifaAhmedAnwarAli'));