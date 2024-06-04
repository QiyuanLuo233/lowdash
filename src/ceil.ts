import createRound from './.internal/createRound.js';

/**
 * 根据 precision（精度） 向上舍入 number。（注： precision（精度）可以理解为保留几位小数。）
 *
 * @since 3.10.0
 * @category Math
 * @param {number} number The number to round up.
 * @param {number} [precision=0] The precision to round up to.
 * @returns {number} Returns the rounded up number.
 * @example
 *
 * ceil(4.006)
 * // => 5
 *
 * ceil(6.004, 2)
 * // => 6.01
 *
 * ceil(6040, -2)
 * // => 6100
 */
const ceil = createRound('ceil');

export default ceil;
