import baseSum from './.internal/baseSum.js';

/** Used as references for various `Number` constants. */
const NAN = 0 / 0;

/**
 * 这个方法类似_.mean， 除了它接受 iteratee 来调用 array中的每一个元素，
 * 来生成其值排序的标准。 iteratee 会调用1个参数: (value) 。
 *
 * @since 1.0.0
 * @category Math
 * @param {Array} array The array to iterate over.
 * @param {Function} iteratee The iteratee invoked per element.
 * @returns {number} Returns the mean.
 * @example
 *
 * const objects = [{ 'n': 4 }, { 'n': 2 }, { 'n': 8 }, { 'n': 6 }]
 *
 * meanBy(objects, ({ n }) => n)
 * // => 5
 */
function meanBy(array:any [], iteratee):number {
    const length = array == null ? 0 : array.length;
    return length ? baseSum(array, iteratee) / length : NAN;
}

export default meanBy;
