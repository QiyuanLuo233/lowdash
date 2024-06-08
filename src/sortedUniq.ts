import baseSortedUniq from './.internal/baseSortedUniq.js';

/**
 * 这个方法类似_.uniq，除了它会优化排序数组。
 *
 * @since 1.0.0
 * @category Array
 * @param {Array} array The array to inspect.
 * @returns {Array} Returns the new duplicate free array.
 * @example
 *
 * sortedUniq([1, 1, 2])
 * // => [1, 2]
 */
function sortedUniq(array:any []):any [] {
    return array != null && array.length ? baseSortedUniq(array) : [];
}

export default sortedUniq;
