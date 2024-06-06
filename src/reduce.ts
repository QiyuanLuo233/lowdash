import arrayReduce from './.internal/arrayReduce.js';
import baseEach from './.internal/baseEach.js';
import baseReduce from './.internal/baseReduce.js';

/**
 * 压缩 collection（集合）为一个值，通过 iteratee（迭代函数）
 * 遍历 collection（集合）中的每个元素，每次返回的值会作为下一次迭代使用
 * (注：作为iteratee（迭代函数）的第一个参数使用)。 如果没有提供 accumulator，
 * 则 collection（集合）中的第一个元素作为初始值。
 * (注：accumulator参数在第一次迭代的时候作为iteratee（迭代函数）第一个参数使用。) iteratee 调用4个参数：
(accumulator, value, index|key, collection).

lodash 中有许多方法是防止作为其他方法的迭代函数

（注：即不能作为iteratee参数传递给其他方法），例如：_.reduce,_.reduceRight, 和_.transform。

受保护的方法有（注：即这些方法不能使用_.reduce,_.reduceRight, 和_.transform作为 iteratee 迭代函数参数）：

assign, defaults, defaultsDeep, includes, merge, orderBy, 和 sortBy
 *
 * @since 1.0.0
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {*} [accumulator] The initial value.
 * @returns {*} Returns the accumulated value.
 * @see reduceRight, transform
 * @example
 *
 * reduce([1, 2], (sum, n) => sum + n, 0)
 * // => 3
 *
 * reduce({ 'a': 1, 'b': 2, 'c': 1 }, (result, value, key) => {
 *   (result[value] || (result[value] = [])).push(key)
 *   return result
 * }, {})
 * // => { '1': ['a', 'c'], '2': ['b'] } (iteration order is not guaranteed)
 */
function reduce(collection, iteratee, accumulator) {
    const func = Array.isArray(collection) ? arrayReduce : baseReduce;
    const initAccum = arguments.length < 3;
    return func(collection, iteratee, accumulator, initAccum, baseEach);
}

export default reduce;
