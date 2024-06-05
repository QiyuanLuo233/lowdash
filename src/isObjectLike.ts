/**
 * 检查 value 是否是 类对象。
 *  如果一个值是类对象，那么它不应该是 null，而且 typeof 后的结果是 "object"。
 *
 * @since 1.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * isObjectLike({})
 * // => true
 *
 * isObjectLike([1, 2, 3])
 * // => true
 *
 * isObjectLike(Function)
 * // => false
 *
 * isObjectLike(null)
 * // => false
 */
function isObjectLike(value):boolean {
    return typeof value === 'object' && value !== null;
}

export default isObjectLike;
