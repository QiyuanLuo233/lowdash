/**
 * 检查 value 是否为 Object 的language type。
 *  (例如： arrays, functions, objects, regexes,new Number(0), 以及 new String(''))
 *
 * @since 1.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * isObject({})
 * // => true
 *
 * isObject([1, 2, 3])
 * // => true
 *
 * isObject(Function)
 * // => true
 *
 * isObject(null)
 * // => false
 */
function isObject(value):boolean {
    const type = typeof value;
    return value != null && (type === 'object' || type === 'function');
}

export default isObject;
