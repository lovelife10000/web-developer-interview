s = 'abananbaacnncn';

[...s].reduce((res, c) => {
    res[c] ? res[c]++ : res[c] = 1;
    return res
}, {})