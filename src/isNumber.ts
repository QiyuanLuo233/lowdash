import getTag from './.internal/getTag.js';
import isObjectLike from './isObjectLike.js';

/**
 * 检查 value 是否是原始Number数值型 或者 对象。
 * **Note:** 要排除 Infinity, -Infinity, 以及 NaN 数值类型，用_.isFinite 方法。
 *
 * @since 1.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a number, else `false`.
 * @see isInteger, toInteger, toNumber
 * @example
 *
 * isNumber(3)
 * // => true
 *
 * isNumber(Number.MIN_VALUE)
 * // => true
 *
 * isNumber(Infinity)
 * // => true
 *
 * isNumber('3')
 * // => false
 */
function isNumber(value):boolean {
    return (
        typeof value === 'number' || (isObjectLike(value) && getTag(value) === '[object Number]')
    );
}

export default isNumber;
