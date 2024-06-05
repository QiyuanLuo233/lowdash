import isLength from './isLength.js';

/**
 * 检查 value 是否是类数组。 
 * 如果一个值被认为是类数组，那么它不是一个函数，
 * 并且value.length是个整数，大于等于 0，小于或等于 Number.MAX_SAFE_INTEGER。
 *
 * @since 1.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * isArrayLike([1, 2, 3])
 * // => true
 *
 * isArrayLike(document.body.children)
 * // => true
 *
 * isArrayLike('abc')
 * // => true
 *
 * isArrayLike(Function)
 * // => false
 */
function isArrayLike(value):boolean {
    return value != null && typeof value !== 'function' && isLength(value.length);
}

export default isArrayLike;
