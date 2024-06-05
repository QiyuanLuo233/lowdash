/** Used as references for various `Number` constants. */
const MAX_SAFE_INTEGER = 9007199254740991;

/**
 * 检查 value 是否为有效的类数组长度。
 *
 * **Note:** 这个函数基于
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @since 1.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * isLength(3)
 * // => true
 *
 * isLength(Number.MIN_VALUE)
 * // => false
 *
 * isLength(Infinity)
 * // => false
 *
 * isLength('3')
 * // => false
 */
function isLength(value):boolean {
    return typeof value === 'number' && value > -1 && value % 1 === 0 && value <= MAX_SAFE_INTEGER;
}

export default isLength;
