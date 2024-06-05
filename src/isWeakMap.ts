import getTag from './.internal/getTag.js';
import isObjectLike from './isObjectLike.js';

/**
 * 检查 value 是否是 WeakMap 对象。
 *
 * @since 1.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a weak map, else `false`.
 * @example
 *
 * isWeakMap(new WeakMap)
 * // => true
 *
 * isWeakMap(new Map)
 * // => false
 */
function isWeakMap(value):boolean {
    return isObjectLike(value) && getTag(value) === '[object WeakMap]';
}

export default isWeakMap;
