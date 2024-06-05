/**
 * 与_.toPairs正好相反；这个方法返回一个由键值对pairs构成的对象。
 * 
 *
 * @since 1.0.0
 * @category Array
 * @param {Array} pairs The key-value pairs.
 * @returns {Object} Returns the new object.
 * @example
 *
 * fromEntries([['a', 1], ['b', 2]])
 * // => { 'a': 1, 'b': 2 }
 */
function fromEntries(pairs:any []) {
    const result = {};
    if (pairs == null) {
        return result;
    }
    for (const pair of pairs) {
        result[pair[0]] = pair[1];
    }
    return result;
}

export default fromEntries;
