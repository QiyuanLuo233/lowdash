import createPadding from './.internal/createPadding.js';
import stringSize from './.internal/stringSize.js';

/**
 * 如果string字符串长度小于 length 则从左侧填充字符。
 *  如果没法平均分配，则截断超出的长度。
 *
 * @since 1.0.0
 * @category String
 * @param {string} [string=''] The string to pad.
 * @param {number} [length=0] The padding length.
 * @param {string} [chars=' '] The string used as padding.
 * @returns {string} Returns the padded string.
 * @example
 *
 * padStart('abc', 6)
 * // => '   abc'
 *
 * padStart('abc', 6, '_-')
 * // => '_-_abc'
 *
 * padStart('abc', 2)
 * // => 'abc'
 */
function padStart(string:string, length:number, chars):string {
    const strLength = length ? stringSize(string) : 0;
    return length && strLength < length
        ? createPadding(length - strLength, chars) + string
        : string || '';
}

export default padStart;
