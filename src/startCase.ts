import upperFirst from './upperFirst.js';
import words from './words.js';

/**
 * 转换 string 字符串为start case.
 * [start case](https://en.wikipedia.org/wiki/Letter_case#Stylistic_or_specialised_usage).
 *
 * @since 1.0.0
 * @category String
 * @param {string} [string=''] The string to convert.
 * @returns {string} Returns the start cased string.
 * @see camelCase, lowerCase, kebabCase, snakeCase, upperCase, upperFirst
 * @example
 *
 * startCase('--foo-bar--')
 * // => 'Foo Bar'
 *
 * startCase('fooBar')
 * // => 'Foo Bar'
 *
 * startCase('__FOO_BAR__')
 * // => 'FOO BAR'
 */
const startCase = (string:string):string =>
    words(`${string}`.replace(/['\u2019]/g, '')).reduce(
        (result, word, index) => result + (index ? ' ' : '') + upperFirst(word),
        '',
    );

export default startCase;
