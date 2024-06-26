import baseSortedUniq from './.internal/baseSortedUniq.js';

/**
 * 这个方法类似_.uniqBy，除了它会优化排序数组。
 *
 * @since 1.0.0
 * @category Array
 * @param {Array} array The array to inspect.
 * @param {Function} iteratee The iteratee invoked per element.
 * @returns {Array} Returns the new duplicate free array.
 * @example
 *
 * sortedUniqBy([1.1, 1.2, 2.3, 2.4], Math.floor)
 * // => [1.1, 2.3]
 */
function sortedUniqBy(array:any [], iteratee):any [] {
    return array != null && array.length ? baseSortedUniq(array, iteratee) : [];
}

export default sortedUniqBy;
