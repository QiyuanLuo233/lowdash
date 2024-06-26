import words from './words.js';
import toString from './toString.js';

/**
 * 转换字符串string为
 * [snake case](https://en.wikipedia.org/wiki/Snake_case).
 *
 * @since 1.0.0
 * @category String
 * @param {string} [string=''] The string to convert.
 * @returns {string} Returns the snake cased string.
 * @see camelCase, lowerCase, kebabCase, startCase, upperCase, upperFirst
 * @example
 *
 * snakeCase('Foo Bar')
 * // => 'foo_bar'
 *
 * snakeCase('fooBar')
 * // => 'foo_bar'
 *
 * snakeCase('--FOO-BAR--')
 * // => 'foo_bar'
 *
 * snakeCase('foo2bar')
 * // => 'foo_2_bar'
 */
const snakeCase = (string:string) =>
    words(toString(string).replace(/['\u2019]/g, '')).reduce(
        (result, word, index) => result + (index ? '_' : '') + word.toLowerCase(),
        '',
    );

export default snakeCase;
