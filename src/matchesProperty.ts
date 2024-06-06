import baseClone from './.internal/baseClone.js';
import baseMatchesProperty from './.internal/baseMatchesProperty.js';

/** Used to compose bitmasks for cloning. */
const CLONE_DEEP_FLAG = 1;

/**
 * 创建一个深比较的方法来比较给定对象的 path 的值是否是 srcValue 。
 * 如果是返回 true ，否则返回 false 。
 *
 * **Note:**  这个方法支持以_.isEqual 的方式比较相同的值。
 *
 * @since 1.0.0
 * @category Util
 * @param {Array|string} path The path of the property to get.
 * @param {*} srcValue The value to match.
 * @returns {Function} Returns the new spec function.
 * @example
 *
 * const objects = [
 *   { 'a': 1, 'b': 2, 'c': 3 },
 *   { 'a': 4, 'b': 5, 'c': 6 }
 * ]
 *
 * find(objects, matchesProperty('a', 4))
 * // => { 'a': 4, 'b': 5, 'c': 6 }
 */
function matchesProperty(path, srcValue) {
    return baseMatchesProperty(path, baseClone(srcValue, CLONE_DEEP_FLAG));
}

export default matchesProperty;
