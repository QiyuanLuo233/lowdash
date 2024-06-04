import createMathOperation from './.internal/createMathOperation.js';

/**
 * 两个数相除。
 *
 * @since 1.0.0
 * @category Math
 * @param {number} dividend The first number in a division.
 * @param {number} divisor The second number in a division.
 * @returns {number} Returns the quotient.
 * @example
 *
 * divide(6, 4)
 * // => 1.5
 */
const divide = createMathOperation((dividend:number, divisor:number) => dividend / divisor, 1);

export default divide;
