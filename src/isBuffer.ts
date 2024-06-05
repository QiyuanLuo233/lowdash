import root from './.internal/root.js';

/* Built-in method references for those with the same name as other `lodash` methods. */
const nativeIsBuffer = root?.Buffer?.isBuffer;

/**
 * 检查 value 是否是个 buffer。
 *
 * @since 1.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * isBuffer(Buffer.alloc(2))
 * // => true
 *
 * isBuffer(new Uint8Array(2))
 * // => false
 */
const isBuffer = typeof nativeIsBuffer === 'function' ? nativeIsBuffer : () => false;

export default isBuffer;
