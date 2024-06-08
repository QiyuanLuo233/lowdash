import baseSortedIndex from './.internal/baseSortedIndex.js';

/**
 * 此方法类似于_.sortedIndex，除了 
 * 它返回 value值 在 array 中尽可能大的索引位置（index）。
 *
 * @since 1.0.0
 * @category Array
 * @param {Array} array The sorted array to inspect.
 * @param {*} value The value to evaluate.
 * @returns {number} Returns the index at which `value` should be inserted
 *  into `array`.
 * @example
 *
 * sortedLastIndex([4, 5, 5, 5, 6], 5)
 * // => 4
 */
function sortedLastIndex(array:any [], value):number {
    return baseSortedIndex(array, value, true);
}

export default sortedLastIndex;
