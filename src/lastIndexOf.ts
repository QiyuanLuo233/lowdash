import baseFindIndex from './.internal/baseFindIndex.js';
import baseIsNaN from './.internal/baseIsNaN.js';
import strictLastIndexOf from './.internal/strictLastIndexOf.js';
import toInteger from './toInteger.js';

/**
 * 这个方法类似_.indexOf ，区别是它是从右到左遍历array的元素。
 *
 * @since 1.0.0
 * @category Array
 * @param {Array} array The array to inspect.
 * @param {*} value The value to search for.
 * @param {number} [fromIndex=array.length-1] The index to search from.
 * @returns {number} Returns the index of the matched value, else `-1`.
 * @example
 *
 * lastIndexOf([1, 2, 1, 2], 2)
 * // => 3
 *
 * // Search from the `fromIndex`.
 * lastIndexOf([1, 2, 1, 2], 2, 2)
 * // => 1
 */
function lastIndexOf(array, value, fromIndex:number):number {
    const length = array == null ? 0 : array.length;
    if (!length) {
        return -1;
    }
    let index = length;
    if (fromIndex !== undefined) {
        index = toInteger(fromIndex);
        index = index < 0 ? Math.max(length + index, 0) : Math.min(index, length - 1);
    }
    return value === value
        ? strictLastIndexOf(array, value, index)
        : baseFindIndex(array, baseIsNaN, index, true);
}

export default lastIndexOf;
