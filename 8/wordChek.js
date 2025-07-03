function wordChek(str, m, k) {
    let count;
    if (!/^[a-z ]+$/.test(str) || typeof str !== 'string' || typeof m !== 'number' || typeof k !== 'number') {
        return count = -1;
    }
    if (m < 1 || m > 10 || k > m || k < 1 || str.length > 100 || str.length < 1) {
        return count = -1;
    }
    const words = str.split(' ');

    function uniqueCharCount(word) {
        const uniqueChars = new Set(word);
        return uniqueChars.size;
    }
    const validWords = words.filter(word => uniqueCharCount(word) === k && word.length === m);
    return count = validWords.length;
}
module.exports = wordChek;