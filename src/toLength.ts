import toInteger from './toInteger.js';

/** Used as references for the maximum length and index of an array. */
const MAX_ARRAY_LENGTH = 4294967295;

/**
 * 转换 value 为用作类数组对象的长度整数。
 *
 * **Note:** 这个方法基于
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @since 1.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {number} Returns the converted integer.
 * @example
 *
 * toLength(3.2)
 * // => 3
 *
 * toLength(Number.MIN_VALUE)
 * // => 0
 *
 * toLength(Infinity)
 * // => 4294967295
 *
 * toLength('3.2')
 * // => 3
 */
function toLength(value):number {
    if (!value) {
        return 0;
    }
    value = toInteger(value);
    if (value < 0) {
        return 0;
    }
    if (value > MAX_ARRAY_LENGTH) {
        return MAX_ARRAY_LENGTH;
    }
    return value;
}

export default toLength;
