import baseClone from './.internal/baseClone.js';
import baseMatches from './.internal/baseMatches.js';

/** Used to compose bitmasks for cloning. */
const CLONE_DEEP_FLAG = 1;

/**
 * 创建一个深比较的方法来比较给定的对象和 source 对象。
 *  如果给定的对象拥有相同的属性值返回 true，否则返回 false。
 *
 * **Note:** 创建的函数相当于_.isMatch应用 source 。
 * 部分比较匹配空数组和空对象源值，分别针对任何数组或对象的价值。
 * 见_.isEqual支持的价值比较的列表。
 *
 * @since 1.0.0
 * @category Util
 * @param {Object} source The object of property values to match.
 * @returns {Function} Returns the new spec function.
 * @example
 *
 * const objects = [
 *   { 'a': 1, 'b': 2, 'c': 3 },
 *   { 'a': 4, 'b': 5, 'c': 6 }
 * ]
 *
 * filter(objects, matches({ 'a': 4, 'c': 6 }))
 * // => [{ 'a': 4, 'b': 5, 'c': 6 }]
 */
function matches(source) {
    return baseMatches(baseClone(source, CLONE_DEEP_FLAG));
}

export default matches;
