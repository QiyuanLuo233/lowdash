import baseFlatten from './.internal/baseFlatten.js';
import map from './map.js';

/** Used as references for various `Number` constants. */
const INFINITY = 1 / 0;

/**
 * 这个方法类似_.flatMap 不同之处在于，_.flatMapDeep 会继续扁平化递归映射的结果。
 *
 * @since 1.0.0
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new flattened array.
 * @see flatMap, flatMapDepth, flatten, flattenDeep, flattenDepth, map, mapKeys, mapValues
 * @example
 *
 * function duplicate(n) {
 *   return [[[n, n]]]
 * }
 *
 * flatMapDeep([1, 2], duplicate)
 * // => [1, 1, 2, 2]
 */
function flatMapDeep(collection:any, iteratee:any):any [] {
    return baseFlatten(map(collection, iteratee), INFINITY);
}

export default flatMapDeep;
