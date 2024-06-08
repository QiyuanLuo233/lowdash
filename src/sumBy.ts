import baseSum from './.internal/baseSum.js';

/**
 * 这个方法类似_.summin 除了它接受 iteratee 来调用 array中的每一个元素，
 * 来生成其值排序的标准。 iteratee 会调用1个参数: (value) 。
 *
 * @since 1.0.0
 * @category Math
 * @param {Array} array The array to iterate over.
 * @param {Function} iteratee The iteratee invoked per element.
 * @returns {number} Returns the sum.
 * @example
 *
 * const objects = [{ 'n': 4 }, { 'n': 2 }, { 'n': 8 }, { 'n': 6 }]
 *
 * sumBy(objects, ({ n }) => n)
 * // => 20
 */
function sumBy(array:any, iteratee):number {
    return array != null && array.length ? baseSum(array, iteratee) : 0;
}

export default sumBy;
