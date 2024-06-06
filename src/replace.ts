/**
 * 替换string字符串中匹配的pattern为给定的replacement 。
 *
 * **Note:** 这个方法基于String#replace.
 * [`String#replace`](https://mdn.io/String/replace).
 *
 * @since 1.0.0
 * @category String
 * @param {string} [string=''] The string to modify.
 * @param {RegExp|string} pattern The pattern to replace.
 * @param {Function|string} replacement The match replacement.
 * @returns {string} Returns the modified string.
 * @see truncate, trim
 * @example
 *
 * replace('Hi Fred', 'Fred', 'Barney')
 * // => 'Hi Barney'
 */
function replace(...args):string {
    const string = `${args[0]}`;
    return args.length < 3 ? string : string.replace(args[1], args[2]);
}

export default replace;
