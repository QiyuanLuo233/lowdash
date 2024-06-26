import baseFlatten from './.internal/baseFlatten.js';

/**
 * 根据 depth 递归减少 array 的嵌套层级。
 *
 * @since 1.0.0
 * @category Array
 * @param {Array} array The array to flatten.
 * @param {number} [depth=1] The maximum recursion depth.
 * @returns {Array} Returns the new flattened array.
 * @see flatMap, flatMapDeep, flatMapDepth, flattenDeep
 * @example
 *
 * const array = [1, [2, [3, [4]], 5]]
 *
 * flattenDepth(array, 1)
 * // => [1, 2, [3, [4]], 5]
 *
 * flattenDepth(array, 2)
 * // => [1, 2, 3, [4], 5]
 */
function flattenDepth(array:any [], depth:number = 1):any [] {
    const length = array == null ? 0 : array.length;
    if (!length) {
        return [];
    }
    depth = depth === undefined ? 1 : +depth;
    return baseFlatten(array, depth);
}

export default flattenDepth;
