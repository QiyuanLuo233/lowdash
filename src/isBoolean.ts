import getTag from './.internal/getTag.js';
import isObjectLike from './isObjectLike.js';

/**
 * 检查 value 是否是原始 boolean 类型或者对象。
 *
 * @since 1.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a boolean, else `false`.
 * @example
 *
 * isBoolean(false)
 * // => true
 *
 * isBoolean(null)
 * // => false
 */
function isBoolean(value):boolean {
    return (
        value === true ||
        value === false ||
        (isObjectLike(value) && getTag(value) === '[object Boolean]')
    );
}

export default isBoolean;
