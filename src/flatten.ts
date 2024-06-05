import baseFlatten from './.internal/baseFlatten.js';

/**
 * 减少一级array嵌套深度。
 *
 * @since 1.0.0
 * @category Array
 * @param {Array} array The array to flatten.
 * @returns {Array} Returns the new flattened array.
 * @see flatMap, flatMapDeep, flatMapDepth, flattenDeep, flattenDepth
 * @example
 *
 * flatten([1, [2, [3, [4]], 5]])
 * // => [1, 2, [3, [4]], 5]
 */
function flatten(array:any []):any [] {
    const length = array == null ? 0 : array.length;
    return length ? baseFlatten(array, 1) : [];
}

export default flatten;
