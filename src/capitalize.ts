import upperFirst from './upperFirst.js';
import toString from './toString.js';

/**
 * 转换字符串string首字母为大写，剩下为小写。
 *
 * @since 1.0.0
 * @category String
 * @param {string} [string=''] The string to capitalize.
 * @returns {string} Returns the capitalized string.
 * @example
 *
 * capitalize('FRED')
 * // => 'Fred'
 */
const capitalize = (string:string) => upperFirst(toString(string).toLowerCase());

export default capitalize;
