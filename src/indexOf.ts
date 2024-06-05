import baseIndexOf from './.internal/baseIndexOf.js';
import toInteger from './toInteger.js';

/**
 * 使用SameValueZero 等值比较，返回首次 value 在数组array中被找到的 索引值，
 *  如果 fromIndex 为负值，将从数组array尾端索引进行匹配。
 *
 * @since 1.0.0
 * @category Array
 * @param {Array} array The array to inspect.
 * @param {*} value The value to search for.
 * @param {number} [fromIndex=0] The index to search from.
 * @returns {number} Returns the index of the matched value, else `-1`.
 * @example
 *
 * indexOf([1, 2, 1, 2], 2)
 * // => 1
 *
 * // Search from the `fromIndex`.
 * indexOf([1, 2, 1, 2], 2, 2)
 * // => 3
 */
function indexOf(array:any, value:any, fromIndex?:number) {
    const length = array == null ? 0 : array.length;
    if (!length) {
        return -1;
    }
    let index = fromIndex == null ? 0 : toInteger(fromIndex);
    if (index < 0) {
        index = Math.max(length + index, 0);
    }
    return baseIndexOf(array, value, index);
}

export default indexOf;
