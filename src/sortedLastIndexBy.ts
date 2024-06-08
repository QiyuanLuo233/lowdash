import baseSortedIndexBy from './.internal/baseSortedIndexBy.js';

/**
 * 这个方法类似_.sortedLastIndex ，除了它接受一个 iteratee （迭代函数），调用每一个数组（array）元素，
 * 返回结果和value 值比较来计算排序。iteratee 会传入一个参数：(value)。
 *
 * @since 1.0.0
 * @category Array
 * @param {Array} array The sorted array to inspect.
 * @param {*} value The value to evaluate.
 * @param {Function} iteratee The iteratee invoked per element.
 * @returns {number} Returns the index at which `value` should be inserted
 *  into `array`.
 * @example
 *
 * const objects = [{ 'n': 4 }, { 'n': 5 }]
 *
 * sortedLastIndexBy(objects, { 'n': 4 }, ({ n }) => n)
 * // => 1
 */
function sortedLastIndexBy(array:any [], value, iteratee):number {
    return baseSortedIndexBy(array, value, iteratee, true);
}

export default sortedLastIndexBy;
