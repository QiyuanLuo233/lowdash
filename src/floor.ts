import createRound from './.internal/createRound.js';

/**
 * 根据 precision（精度） 向下舍入 number。（注： precision（精度）可以理解为保留几位小数。）
 *
 * @since 1.0.0
 * @category Math
 * @param {number} number The number to round down.
 * @param {number} [precision=0] The precision to round down to.
 * @returns {number} Returns the rounded down number.
 * @example
 *
 * floor(4.006)
 * // => 4
 *
 * floor(0.046, 2)
 * // => 0.04
 *
 * floor(4060, -2)
 * // => 4000
 */
const floor = createRound('floor');

export default floor;
