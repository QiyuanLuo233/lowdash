import baseMean from './meanBy.js';

/**
 * 计算 array 的平均值。
 *
 * @since 1.0.0
 * @category Math
 * @param {Array} array The array to iterate over.
 * @returns {number} Returns the mean.
 * @example
 *
 * mean([4, 2, 8, 6])
 * // => 5
 */
function mean(array:any []):number {
    return baseMean(array, (value) => value);
}

export default mean;
