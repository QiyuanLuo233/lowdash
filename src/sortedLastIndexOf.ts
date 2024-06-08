import baseSortedIndex from './.internal/baseSortedIndex.js';
import eq from './eq.js';

/**
 * 这个方法类似_.lastIndexOf，除了它是在已经排序的数组array上执行二进制检索。
 *
 * @since 1.0.0
 * @category Array
 * @param {Array} array The array to inspect.
 * @param {*} value The value to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 * @example
 *
 * sortedLastIndexOf([4, 5, 5, 5, 6], 5)
 * // => 3
 */
function sortedLastIndexOf(array:any [], value):number {
    const length = array == null ? 0 : array.length;
    if (length) {
        const index = baseSortedIndex(array, value, true) - 1;
        if (eq(array[index], value)) {
            return index;
        }
    }
    return -1;
}

export default sortedLastIndexOf;
