import getTag from './.internal/getTag.js';

/**
 * 检查 value 是否是原始字符串String或者对象。
 *
 * @since 1.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a string, else `false`.
 * @example
 *
 * isString('abc')
 * // => true
 *
 * isString(1)
 * // => false
 */
function isString(value):boolean {
    const type = typeof value;
    return (
        type === 'string' ||
        (type === 'object' &&
            value != null &&
            !Array.isArray(value) &&
            getTag(value) === '[object String]')
    );
}

export default isString;
