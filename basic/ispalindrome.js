function isPalindrome(str) {
    revstr = '';
    for (let i = str.length - 1; i >= 0; i--) {
        revstr = revstr + str[i];
    }
    if (revstr == str)
        return true;
    else
        return false;
}

//console.log(isPalindrome('oyo'));

function isPalindromeshortcut(str) {
    let arr = str.split('')//array to string
    let revarr = arr.reverse();
    let revstring = revarr.join('');//string to array
    return revstring == str;
}

console.log(isPalindromeshortcut('goyo'));

function isPalindromeshortcut1(str) {

    let revstring = str.split('').reverse().join('');//string to array
    return revstring == str;
}