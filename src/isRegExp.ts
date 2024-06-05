import getTag from './.internal/getTag.js';
import isObjectLike from './isObjectLike.js';
import nodeTypes from './.internal/nodeTypes.js';

/* Node.js helper references. */
const nodeIsRegExp = nodeTypes && nodeTypes.isRegExp;

/**
 * 检查 value 是否为RegExp对象。
 *
 * @since 1.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a regexp, else `false`.
 * @example
 *
 * isRegExp(/abc/)
 * // => true
 *
 * isRegExp('/abc/')
 * // => false
 */
const isRegExp = nodeIsRegExp
    ? (value) => nodeIsRegExp(value)
    : (value) => isObjectLike(value) && getTag(value) === '[object RegExp]';

export default isRegExp;
