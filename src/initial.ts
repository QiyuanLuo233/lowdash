import slice from './slice.js';

/**
 * 获取数组array中除了最后一个元素之外的所有元素
 * （注：去除数组array中的最后一个元素）
 *
 * @since 1.0.0
 * @category Array
 * @param {Array} array The array to query.
 * @returns {Array} Returns the slice of `array`.
 * @example
 *
 * initial([1, 2, 3])
 * // => [1, 2]
 */
function initial(array):any [] {
    const length = array == null ? 0 : array.length;
    return length ? slice(array, 0, -1) : [];
}

export default initial;
