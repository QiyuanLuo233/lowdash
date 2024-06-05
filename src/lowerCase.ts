import words from './words.js';
import toString from './toString.js';

const reQuotes = /['\u2019]/g;

/**
 * 转换字符串string以空格分开单词，并转换为小写。
 * @since 1.0.0
 * @category String
 * @param {string} [string=''] The string to convert.
 * @returns {string} Returns the lower cased string.
 * @see camelCase, kebabCase, snakeCase, startCase, upperCase, upperFirst
 * @example
 *
 * lowerCase('--Foo-Bar--')
 * // => 'foo bar'
 *
 * lowerCase('fooBar')
 * // => 'foo bar'
 *
 * lowerCase('__FOO_BAR__')
 * // => 'foo bar'
 */
const lowerCase = (string:string) =>
    words(toString(string).replace(reQuotes, '')).reduce(
        (result, word, index) => result + (index ? ' ' : '') + word.toLowerCase(),
        '',
    );

export default lowerCase;
