/**
 * 检查 value 是否是 Function 对象。
 *
 * @since 1.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * isFunction(class Any{})
 * // => true
 *
 * isFunction(() => {})
 * // => true
 *
 * isFunction(async () => {})
 * // => true
 *
 * isFunction(function * Any() {})
 * // => true
 *
 * isFunction(Math.round)
 * // => true
 *
 * isFunction(/abc/)
 * // => false
 */
function isFunction(value):boolean {
    return typeof value === 'function';
}

export default isFunction;
