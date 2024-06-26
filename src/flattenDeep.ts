import baseFlatten from './.internal/baseFlatten.js';

/** Used as references for various `Number` constants. */
const INFINITY = 1 / 0;

/**
 * 将array递归为一维数组。
 *
 * @since 1.0.0
 * @category Array
 * @param {Array} array The array to flatten.
 * @returns {Array} Returns the new flattened array.
 * @see flatMap, flatMapDeep, flatMapDepth, flatten, flattenDepth
 * @example
 *
 * flattenDeep([1, [2, [3, [4]], 5]])
 * // => [1, 2, 3, 4, 5]
 */
function flattenDeep(array:any []):any [] {
    const length = array == null ? 0 : array.length;
    return length ? baseFlatten(array, INFINITY) : [];
}

export default flattenDeep;
