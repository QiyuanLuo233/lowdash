import upperFirst from './upperFirst.js';
import words from './words.js';
import toString from './toString.js';

/**
 * 转换字符串string为驼峰写法。
 *
 * @since 1.0.0
 * @category String
 * @param {string} [string=''] The string to convert.
 * @returns {string} Returns the camel cased string.
 * @see lowerCase, kebabCase, snakeCase, startCase, upperCase, upperFirst
 * @example
 *
 * camelCase('Foo Bar')
 * // => 'fooBar'
 *
 * camelCase('--foo-bar--')
 * // => 'fooBar'
 *
 * camelCase('__FOO_BAR__')
 * // => 'fooBar'
 */
const camelCase = (string:string) =>
    words(toString(string).replace(/['\u2019]/g, '')).reduce((result, word, index) => {
        word = word.toLowerCase();
        return result + (index ? upperFirst(word) : word);
    }, '');

export default camelCase;
