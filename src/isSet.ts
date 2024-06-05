import getTag from './.internal/getTag.js';
import nodeTypes from './.internal/nodeTypes.js';
import isObjectLike from './isObjectLike.js';

/* Node.js helper references. */
const nodeIsSet = nodeTypes && nodeTypes.isSet;

/**
 * 检查 value 是否是一个Set对象。
 *
 * @since 1.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a set, else `false`.
 * @example
 *
 * isSet(new Set)
 * // => true
 *
 * isSet(new WeakSet)
 * // => false
 */
const isSet = nodeIsSet
    ? (value) => nodeIsSet(value)
    : (value) => isObjectLike(value) && getTag(value) === '[object Set]';

export default isSet;
