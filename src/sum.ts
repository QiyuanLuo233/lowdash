import baseSum from './.internal/baseSum.js';

/**
 * 数组各项之和
 *
 * @since 1.0.0
 * @category Math
 * @param {Array} array The array to iterate over.
 * @returns {number} Returns the sum.
 * @example
 *
 * sum([4, 2, 8, 6])
 * // => 20
 */
function sum(array:any):number {
    return array != null && array.length ? baseSum(array, (value) => value) : 0;
}

export default sum;
