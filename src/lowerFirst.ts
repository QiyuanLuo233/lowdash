import createCaseFirst from './.internal/createCaseFirst.js';

/**
 * 转换字符串string的首字母为小写。
 *
 * @since 1.0.0
 * @category String
 * @param {string} [string=''] The string to convert.
 * @returns {string} Returns the converted string.
 * @example
 *
 * lowerFirst('Fred')
 * // => 'fred'
 *
 * lowerFirst('FRED')
 * // => 'fRED'
 */
const lowerFirst = createCaseFirst('toLowerCase');

export default lowerFirst;
