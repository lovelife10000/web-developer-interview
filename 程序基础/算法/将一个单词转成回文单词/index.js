function changePalindrom(str) {
    var reverse = str.slice(0, str.length - 1);
    return str.concat(reverse.split('').reverse().join(''));
}

console.log(changePalindrom('redivider'))