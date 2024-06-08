import baseUniq from './.internal/baseUniq.js';

/**
 * 创建一个去重后的array数组副本。使用了SameValueZero 做等值比较。只有第一次出现的元素才会被保留。
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)

 *
 * @since 1.0.0
 * @category Array
 * @param {Array} array The array to inspect.
 * @returns {Array} Returns the new duplicate free array.
 * @see uniqBy, uniqWith
 * @example
 *
 * uniq([2, 1, 2])
 * // => [2, 1]
 */
function uniq(array:any []):any [] {
    return array != null && array.length ? baseUniq(array) : [];
}

export default uniq;
