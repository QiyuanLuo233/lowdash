import baseIsMatch from './.internal/baseIsMatch.js';
import getMatchData from './.internal/getMatchData.js';

/**
 * 执行一个深度比较，来确定 object 是否含有和 source 完全相等的属性值。
 *
 * **Note:** 当source为偏应用时，这种方法等价于_.matches。
 * （注：关于偏应用大家可以自己到google上搜索一下）。
 * 偏应用比较匹配空数组和空对象source值分别针对任何数组或对象的价值。在_.isEqual中查看支持的值比较列表。
 *
 * @since 1.0.0
 * @category Lang
 * @param {Object} object The object to inspect.
 * @param {Object} source The object of property values to match.
 * @returns {boolean} Returns `true` if `object` is a match, else `false`.
 * @example
 *
 * const object = { 'a': 1, 'b': 2 }
 *
 * isMatch(object, { 'b': 2 })
 * // => true
 *
 * isMatch(object, { 'b': 1 })
 * // => false
 */
function isMatch(object, source):boolean {
    return object === source || baseIsMatch(object, source, getMatchData(source));
}

export default isMatch;
