import createMathOperation from './.internal/createMathOperation.js';

/**
 * 两数相减
 *
 * @since 1.0.0
 * @category Math
 * @param {number} minuend The first number in a subtraction.
 * @param {number} subtrahend The second number in a subtraction.
 * @returns {number} Returns the difference.
 * @example
 *
 * subtract(6, 4)
 * // => 2
 */
const subtract = createMathOperation((minuend:number, subtrahend:number):number => minuend - subtrahend, 0);

export default subtract;
