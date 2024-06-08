import baseSortedIndex from './.internal/baseSortedIndex.js';

/**
 * 使用二进制的方式检索来决定 value值 应该插入到数组中
 *  尽可能小的索引位置，以保证array的排序。
 *
 * @since 1.0.0
 * @category Array
 * @param {Array} array The sorted array to inspect.
 * @param {*} value The value to evaluate.
 * @returns {number} Returns the index at which `value` should be inserted
 *  into `array`.
 * @example
 *
 * sortedIndex([30, 50], 40)
 * // => 1
 */
function sortedIndex(array:any [], value:any):number {
    return baseSortedIndex(array, value);
}

export default sortedIndex;
