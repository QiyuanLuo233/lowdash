import unicodeWords from './.internal/unicodeWords.js';

const hasUnicodeWord = RegExp.prototype.test.bind(
    /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,
);

/** Used to match words composed of alphanumeric characters. */
// eslint-disable-next-line no-control-regex
const reAsciiWord = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;

function asciiWords(string) {
    return string.match(reAsciiWord);
}

/**
 * 拆分字符串string中的词为数组 。
 *
 * @since 1.0.0
 * @category String
 * @param {string} [string=''] The string to inspect.
 * @param {RegExp|string} [pattern] The pattern to match words.
 * @returns {Array} Returns the words of `string`.
 * @example
 *
 * words('fred, barney, & pebbles')
 * // => ['fred', 'barney', 'pebbles']
 *
 * words('fred, barney, & pebbles', /[^, ]+/g)
 * // => ['fred', 'barney', '&', 'pebbles']
 */
function words(string:string, pattern:any = undefined):any [] {
    if (pattern === undefined) {
        const result = hasUnicodeWord(string) ? unicodeWords(string) : asciiWords(string);
        return result || [];
    }
    return string.match(pattern) || [];
}

export default words;
