import createMathOperation from './.internal/createMathOperation.js';

/**
 * 两个数的乘积
 *
 * @since 1.0.0
 * @category Math
 * @param {number} multiplier The first number in a multiplication.
 * @param {number} multiplicand The second number in a multiplication.
 * @returns {number} Returns the product.
 * @example
 *
 * multiply(6, 4)
 * // => 24
 */
const multiply = createMathOperation((multiplier, multiplicand) => multiplier * multiplicand, 1);

export default multiply;
