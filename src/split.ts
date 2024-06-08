import castSlice from './.internal/castSlice.js';
import hasUnicode from './.internal/hasUnicode.js';
import isRegExp from './isRegExp.js';
import stringToArray from './.internal/stringToArray.js';

/** Used as references for the maximum length and index of an array. */
const MAX_ARRAY_LENGTH = 4294967295;

/**
 * 根据separator 拆分字符串string。
 *
 * **Note:** 这个方法基于
 * [`String#split`](https://mdn.io/String/split).
 *
 * @since 1.0.0
 * @category String
 * @param {string} [string=''] The string to split.
 * @param {RegExp|string} separator The separator pattern to split by.
 * @param {number} [limit] The length to truncate results to.
 * @returns {Array} Returns the string segments.
 * @example
 *
 * split('a-b-c', '-', 2)
 * // => ['a', 'b']
 */
function split(string:string, separator:RegExp|string, limit:number):any [] {
    limit = limit === undefined ? MAX_ARRAY_LENGTH : limit >>> 0;
    if (!limit) {
        return [];
    }
    if (string && (typeof separator === 'string' || (separator != null && !isRegExp(separator)))) {
        if (!separator && hasUnicode(string)) {
            return castSlice(stringToArray(string), 0, limit);
        }
    }
    return string.split(separator, limit);
}

export default split;
