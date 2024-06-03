import createMathOperation from './.internal/createMathOperation.js';

/**
 * 两个数字相加
 *
 * @since 1.0.0
 * @category Math
 * @param {number} augend The first number in an addition.
 * @param {number} addend The second number in an addition.
 * @returns {number} Returns the total.
 * @example
 *
 * add(6, 4)
 * // => 10
 */
const add = createMathOperation((augend:number, addend:number):number => augend + addend, 0);

export default add;
