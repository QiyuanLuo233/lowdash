import createRange from './.internal/createRange.js';

/**
 * 创建一个包含从 start 到 end，但不包含 end 本身范围数字的数组。
 *  如果 start 是负数，而 end 或 step 没有指定，那么 step 从 -1 为开始。
 *  如果 end 没有指定，start 设置为 0。 如果 end 小于 start ，会创建一个空数组，除非指定了 step。
 *
 * **Note:** JavaScript 遵循 IEEE-754 标准处理无法预料的浮点数结果。
 *
 * @since 1.0.0
 * @category Util
 * @param {number} [start=0] The start of the range.
 * @param {number} end The end of the range.
 * @param {number} [step=1] The value to increment or decrement by.
 * @returns {Array} Returns the range of numbers.
 * @see inRange, rangeRight
 * @example
 *
 * range(4)
 * // => [0, 1, 2, 3]
 *
 * range(-4)
 * // => [0, -1, -2, -3]
 *
 * range(1, 5)
 * // => [1, 2, 3, 4]
 *
 * range(0, 20, 5)
 * // => [0, 5, 10, 15]
 *
 * range(0, -4, -1)
 * // => [0, -1, -2, -3]
 *
 * range(1, 4, 0)
 * // => [1, 1, 1]
 *
 * range(0)
 * // => []
 */
const range = createRange();

export default range;
