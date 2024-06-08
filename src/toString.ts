import isSymbol from './isSymbol.js';

/** Used as references for various `Number` constants. */
const INFINITY = 1 / 0;

/**
 * 转换 value 为字符串。 null 和 undefined 将返回空字符串。
 * -0 将被转换为字符串"-0"。
 *
 * @since 1.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 * @example
 *
 * toString(null)
 * // => ''
 *
 * toString(-0)
 * // => '-0'
 *
 * toString([1, 2, 3])
 * // => '1,2,3'
 */
function toString(value):string {
    if (value == null) {
        return '';
    }
    // Exit early for strings to avoid a performance hit in some environments.
    if (typeof value === 'string') {
        return value;
    }
    if (Array.isArray(value)) {
        // Recursively convert values (susceptible to call stack limits).
        return `${value.map((other) => (other == null ? other : toString(other)))}`;
    }
    if (isSymbol(value)) {
        return value.toString();
    }
    const result = `${value}`;
    return result === '0' && 1 / value === -INFINITY ? '-0' : result;
}

export default toString;
