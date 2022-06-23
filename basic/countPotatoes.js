function countPotatoes(str) {
    let count = 0, lastIndex = 0
    while (true) {
        let i = str.indexOf('potato', lastIndex)
        if (i == -1)
            return count;
        else {
            lastIndex = i + 'potato'.length;
            count++;
        }
    }

}

function countwordinstring(str, a) {
    let count = 0, lastIndex = 0;
    while (true) {
        let i = str.indexOf(a, lastIndex);
        if (i == -1)
            return count;
        else {
            lastIndex = i + a.length;
            count++;
        }
    }

}

console.log(countPotatoes("potato"));

console.log(countPotatoes("potatopotato"))

console.log(countPotatoes("potatoapple"))

console.log(countwordinstring("potato", 'apple'))








