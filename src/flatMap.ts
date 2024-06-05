import baseFlatten from './.internal/baseFlatten.js';
import map from './map.js';

/**
 * 创建一个扁平化（注：同阶数组）的数组，
 * 这个数组的值来自collection（集合）中的每一个值经过 iteratee（迭代函数）
 *  处理后返回的结果，并且扁平化合并。 iteratee 调用三个参数： (value, index|key, collection)。
 *
 * @since 1.0.0
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new flattened array.
 * @see flatMapDeep, flatMapDepth, flatten, flattenDeep, flattenDepth, map, mapKeys, mapValues
 * @example
 *
 * function duplicate(n) {
 *   return [n, n]
 * }
 *
 * flatMap([1, 2], duplicate)
 * // => [1, 1, 2, 2]
 */
function flatMap(collection:any, iteratee:any):any [] {
    return baseFlatten(map(collection, iteratee), 1);
}

export default flatMap;
