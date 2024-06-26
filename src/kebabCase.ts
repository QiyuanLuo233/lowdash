import words from './words.js';
import toString from './toString.js';

/**
 *转换字符串string为 
 * [kebab case](https://en.wikipedia.org/wiki/Letter_case#Special_case_styles).
 *
 * @since 1.0.0
 * @category String
 * @param {string} [string=''] The string to convert.
 * @returns {string} Returns the kebab cased string.
 * @see camelCase, lowerCase, snakeCase, startCase, upperCase, upperFirst
 * @example
 *
 * kebabCase('Foo Bar')
 * // => 'foo-bar'
 *
 * kebabCase('fooBar')
 * // => 'foo-bar'
 *
 * kebabCase('__FOO_BAR__')
 * // => 'foo-bar'
 */
const kebabCase = (string:string):string =>
    words(toString(string).replace(/['\u2019]/g, '')).reduce(
        (result, word, index) => result + (index ? '-' : '') + word.toLowerCase(),
        '',
    );

export default kebabCase;
