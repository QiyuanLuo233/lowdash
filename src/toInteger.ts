import toFinite from './toFinite.js';

/**
 * 转换 value 为一个整数。
 *
 * **Note:** 这个方法基于
 * [`ToInteger`](http://www.ecma-international.org/ecma-262/7.0/#sec-tointeger).
 *
 * @since 1.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {number} Returns the converted integer.
 * @see isInteger, isNumber, toNumber
 * @example
 *
 * toInteger(3.2)
 * // => 3
 *
 * toInteger(Number.MIN_VALUE)
 * // => 0
 *
 * toInteger(Infinity)
 * // => 1.7976931348623157e+308
 *
 * toInteger('3.2')
 * // => 3
 */
function toInteger(value):number {
    const result = toFinite(value);
    const remainder = result % 1;

    return remainder ? result - remainder : result;
}

export default toInteger;
