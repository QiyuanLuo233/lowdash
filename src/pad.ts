import createPadding from './.internal/createPadding.js';
import stringSize from './.internal/stringSize.js';

/**
 * 如果string字符串长度小于 length 则从左侧和右侧填充字符。 
 * 如果没法平均分配，则截断超出的长度。
 *
 * @since 1.0.0
 * @category String
 * @param {string} [string=''] The string to pad.
 * @param {number} [length=0] The padding length.
 * @param {string} [chars=' '] The string used as padding.
 * @returns {string} Returns the padded string.
 * @example
 *
 * pad('abc', 8)
 * // => '  abc   '
 *
 * pad('abc', 8, '_-')
 * // => '_-abc_-_'
 *
 * pad('abc', 2)
 * // => 'abc'
 */
function pad(string:string, length:number, chars):string {
    const strLength = length ? stringSize(string) : 0;
    if (!length || strLength >= length) {
        return string || '';
    }
    const mid = (length - strLength) / 2;
    return createPadding(Math.floor(mid), chars) + string + createPadding(Math.ceil(mid), chars);
}

export default pad;
