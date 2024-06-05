import getTag from './.internal/getTag.js';
import isObjectLike from './isObjectLike.js';
import isPlainObject from './isPlainObject.js';

/**
 * 检查 value 是否是 Error, EvalError, RangeError,
 *  ReferenceError,SyntaxError, TypeError, 或者 URIError对象。
 *
 * @since 1.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an error object, else `false`.
 * @example
 *
 * isError(new Error)
 * // => true
 *
 * isError(Error)
 * // => false
 */
function isError(value):boolean {
    if (!isObjectLike(value)) {
        return false;
    }
    const tag = getTag(value);
    return (
        tag === '[object Error]' ||
        tag === '[object DOMException]' ||
        (typeof value.message === 'string' &&
            typeof value.name === 'string' &&
            !isPlainObject(value))
    );
}

export default isError;
