import baseUniq from './.internal/baseUniq.js';

/**
 * 这个方法类似_.uniq ，除了它接受一个 iteratee （迭代函数），
 * 调用每一个数组（array）的每个元素以产生唯一性计算的标准。
 * iteratee 调用时会传入一个参数：(value)。
 *
 * @since 1.0.0
 * @category Array
 * @param {Array} array The array to inspect.
 * @param {Function} iteratee The iteratee invoked per element.
 * @returns {Array} Returns the new duplicate free array.
 * @see uniq, uniqWith
 * @example
 *
 * uniqBy([2.1, 1.2, 2.3], Math.floor)
 * // => [2.1, 1.2]
 */
function uniqBy(array:any [], iteratee):any [] {
    return array != null && array.length ? baseUniq(array, iteratee) : [];
}

export default uniqBy;
