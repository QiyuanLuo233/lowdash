import getTag from './.internal/getTag.js';
import isObjectLike from './isObjectLike.js';

/**
 * 检查 value 是否是一个类 arguments 对象。
 *
 * @since 1.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object, else `false`.
 * @example
 *
 * isArguments(function() { return arguments }())
 * // => true
 *
 * isArguments([1, 2, 3])
 * // => false
 */
function isArguments(value):boolean {
    return isObjectLike(value) && getTag(value) === '[object Arguments]';
}

export default isArguments;
