import slice from './slice.js';
import toInteger from './toInteger.js';

/**
 * 创建一个切片数组，去除array尾部的n个元素。（n默认值为1。）
 *
 * @since 1.0.0
 * @category Array
 * @param {Array} array The array to query.
 * @param {number} [n=1] The number of elements to drop.
 * @returns {Array} Returns the slice of `array`.
 * @example
 *
 * dropRight([1, 2, 3])
 * // => [1, 2]
 *
 * dropRight([1, 2, 3], 2)
 * // => [1]
 *
 * dropRight([1, 2, 3], 5)
 * // => []
 *
 * dropRight([1, 2, 3], 0)
 * // => [1, 2, 3]
 */
function dropRight(array:any [], n:number = 1) {
    const length = array == null ? 0 : array.length;
    n = length - toInteger(n);
    return length ? slice(array, 0, n < 0 ? 0 : n) : [];
}

export default dropRight;
