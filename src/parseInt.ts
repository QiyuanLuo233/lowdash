import root from './.internal/root.js';

/** Used to match leading and trailing whitespace. */
const reTrimStart = /^\s+/;

/* Built-in method references for those with the same name as other `lodash` methods. */
const nativeParseInt = root.parseInt;

/**
 * 转换string字符串为指定基数的整数。 如果基数是 undefined 或者 0，
 * 则radix基数默认是10，如果string字符串是16进制，则radix基数为 16。
 *
 * **Note:** 这个方法与ES5 implementation 的 parseInt是一样的。
 * [ES5 implementation](https://es5.github.io/#x15.1.2.2) of `parseInt`.
 *
 * @since 1.0.0
 * @category String
 * @param {string} string The string to convert.
 * @param {number} [radix=10] The radix to interpret `string` by.
 * @returns {number} Returns the converted integer.
 * @example
 *
 * parseInt('08')
 * // => 8
 */
function parseInt(string, radix) {
    if (radix == null) {
        radix = 0;
    } else if (radix) {
        radix = +radix;
    }
    return nativeParseInt(`${string}`.replace(reTrimStart, ''), radix || 0);
}

export default parseInt;
