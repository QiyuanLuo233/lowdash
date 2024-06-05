import isObjectLike from './isObjectLike.js';
import isPlainObject from './isPlainObject.js';

/**
 * 检查 value 是否是可能是 DOM 元素。
 *
 * @since 1.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a DOM element, else `false`.
 * @example
 *
 * isElement(document.body)
 * // => true
 *
 * isElement('<body>')
 * // => false
 */
function isElement(value:any):boolean {
    return isObjectLike(value) && value.nodeType === 1 && !isPlainObject(value);
}

export default isElement;
