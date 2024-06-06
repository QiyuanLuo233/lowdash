import baseMerge from './.internal/baseMerge.js';
import createAssigner from './.internal/createAssigner.js';

/**
 * 该方法类似_.assign， 除了它递归合并 sources 来源对象自身和继承的可枚举属性到 object 目标对象。
 * 如果目标值存在，被解析为undefined的sources 来源对象属性将被跳过。
 * 数组和普通对象会递归合并，其他对象和值会被直接分配覆盖。源对象从从左到右分配。
 * 后续的来源对象属性会覆盖之前分配的属性。
 *
 * **Note:** 这方法会改变对象 object.
 *
 * @since 1.0.0
 * @category Object
 * @param {Object} object The destination object.
 * @param {...Object} [sources] The source objects.
 * @returns {Object} Returns `object`.
 * @example
 *
 * const object = {
 *   'a': [{ 'b': 2 }, { 'd': 4 }]
 * }
 *
 * const other = {
 *   'a': [{ 'c': 3 }, { 'e': 5 }]
 * }
 *
 * merge(object, other)
 * // => { 'a': [{ 'b': 2, 'c': 3 }, { 'd': 4, 'e': 5 }] }
 */
const merge = createAssigner((object, source, srcIndex) => {
    baseMerge(object, source, srcIndex);
});

export default merge;
