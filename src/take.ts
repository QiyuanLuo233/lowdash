import slice from './slice.js';

/**
 * 创建一个数组切片，从array数组的起始元素开始提取n个元素。
 *
 * @since 1.0.0
 * @category Array
 * @param {Array} array The array to query.
 * @param {number} [n=1] The number of elements to take.
 * @returns {Array} Returns the slice of `array`.
 * @example
 *
 * take([1, 2, 3])
 * // => [1]
 *
 * take([1, 2, 3], 2)
 * // => [1, 2]
 *
 * take([1, 2, 3], 5)
 * // => [1, 2, 3]
 *
 * take([1, 2, 3], 0)
 * // => []
 */
function take(array:any [], n:number = 1):any [] {
    if (!(array != null && array.length)) {
        return [];
    }
    return slice(array, 0, n < 0 ? 0 : n);
}

export default take;
