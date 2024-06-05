import baseFlatten from './.internal/baseFlatten.js';
import map from './map.js';

/**
 * 该方法类似_.flatMap，不同之处在于，_.flatMapDepth 会根据指定的 depth（递归深度）
 * 继续扁平化递归映射结果。
 *
 * @since 1.0.0
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {number} [depth=1] The maximum recursion depth.
 * @returns {Array} Returns the new flattened array.
 * @see flatMap, flatMapDeep, flatten, flattenDeep, flattenDepth, map, mapKeys, mapValues
 * @example
 *
 * function duplicate(n) {
 *   return [[[n, n]]]
 * }
 *
 * flatMapDepth([1, 2], duplicate, 2)
 * // => [[1, 1], [2, 2]]
 */
function flatMapDepth(collection, iteratee, depth:number):any [] {
    depth = depth === undefined ? 1 : +depth;
    return baseFlatten(map(collection, iteratee), depth);
}

export default flatMapDepth;
