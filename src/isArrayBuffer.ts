import getTag from './.internal/getTag.js';
import isObjectLike from './isObjectLike.js';
import nodeTypes from './.internal/nodeTypes.js';

/* Node.js helper references. */
const nodeIsArrayBuffer = nodeTypes && nodeTypes.isArrayBuffer;

/**
 * 检查 value 是否是 ArrayBuffer 对象。
 *
 * @since 1.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array buffer, else `false`.
 * @example
 *
 * isArrayBuffer(new ArrayBuffer(2))
 * // => true
 *
 * isArrayBuffer(new Array(2))
 * // => false
 */
const isArrayBuffer = nodeIsArrayBuffer
    ? (value) => nodeIsArrayBuffer(value)
    : (value) => isObjectLike(value) && getTag(value) === '[object ArrayBuffer]';

export default isArrayBuffer;
