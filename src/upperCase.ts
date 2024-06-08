import words from './words.js';
import toString from './toString.js';

/**
 * 转换字符串string为 空格 分隔的大写单词。
 *
 * @since 1.0.0
 * @category String
 * @param {string} [string=''] The string to convert.
 * @returns {string} Returns the upper cased string.
 * @see camelCase, kebabCase, lowerCase, snakeCase, startCase, upperFirst
 * @example
 *
 * upperCase('--foo-bar')
 * // => 'FOO BAR'
 *
 * upperCase('fooBar')
 * // => 'FOO BAR'
 *
 * upperCase('__foo_bar__')
 * // => 'FOO BAR'
 */
const upperCase = (string:string):string =>
    words(toString(string).replace(/['\u2019]/g, '')).reduce(
        (result, word, index) => result + (index ? ' ' : '') + word.toUpperCase(),
        '',
    );

export default upperCase;
