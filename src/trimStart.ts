import castSlice from './.internal/castSlice.js';
import charsStartIndex from './.internal/charsStartIndex.js';
import stringToArray from './.internal/stringToArray.js';

const methodName = ''.trimLeft ? 'trimLeft' : 'trimStart';

/**
 * 从string字符串中移除前面的 空格 或 指定的字符。
 *
 * @since 1.0.0
 * @category String
 * @param {string} [string=''] The string to trim.
 * @param {string} [chars=whitespace] The characters to trim.
 * @returns {string} Returns the trimmed string.
 * @see trim, trimEnd
 * @example
 *
 * trimStart('  abc  ')
 * // => 'abc  '
 *
 * trimStart('-_-abc-_-', '_-')
 * // => 'abc-_-'
 */
function trimStart(string, chars) {
    if (string && chars === undefined) {
        return string[methodName]();
    }
    if (!string || !chars) {
        return string || '';
    }
    const strSymbols = stringToArray(string);
    const start = charsStartIndex(strSymbols, stringToArray(chars));
    return castSlice(strSymbols, start).join('');
}

export default trimStart;
