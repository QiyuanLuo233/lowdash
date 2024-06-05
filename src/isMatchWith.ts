import baseIsMatch from './.internal/baseIsMatch.js';
import getMatchData from './.internal/getMatchData.js';

/**
 * 这个方法类似_.isMatch。 除了它接受一个 customizer 定制比较的值。 
 * 如果 customizer 返回 undefined 将会比较处理方法代替。 
 * customizer 会传入5个参数：(objValue, srcValue, index|key, object, source)。
 *
 * @since 1.0.0
 * @category Lang
 * @param {Object} object The object to inspect.
 * @param {Object} source The object of property values to match.
 * @param {Function} [customizer] The function to customize comparisons.
 * @returns {boolean} Returns `true` if `object` is a match, else `false`.
 * @example
 *
 * function isGreeting(value) {
 *   return /^h(?:i|ello)$/.test(value)
 * }
 *
 * function customizer(objValue, srcValue) {
 *   if (isGreeting(objValue) && isGreeting(srcValue)) {
 *     return true
 *   }
 * }
 *
 * const object = { 'greeting': 'hello' }
 * const source = { 'greeting': 'hi' }
 *
 * isMatchWith(object, source, customizer)
 * // => true
 */
function isMatchWith(object, source, customizer):boolean {
    customizer = typeof customizer === 'function' ? customizer : undefined;
    return baseIsMatch(object, source, getMatchData(source), customizer);
}

export default isMatchWith;
