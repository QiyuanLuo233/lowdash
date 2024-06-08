import map from './map.js';
import unzip from './unzip.js';

/**
 * 此方法类似于_.unzip，除了它接受一个iteratee指定重组值应该如何被组合。
 * iteratee 调用时会传入每个分组的值： (...group)。
 *
 * @since 1.0.0
 * @category Array
 * @param {Array} array The array of grouped elements to process.
 * @param {Function} iteratee The function to combine
 *  regrouped values.
 * @returns {Array} Returns the new array of regrouped elements.
 * @example
 *
 * const zipped = zip([1, 2], [10, 20], [100, 200])
 * // => [[1, 10, 100], [2, 20, 200]]
 *
 * unzipWith(zipped, add)
 * // => [3, 30, 300]
 */
function unzipWith(array:any [], iteratee):any [] {
    if (!(array != null && array.length)) {
        return [];
    }
    const result = unzip(array);
    return map(result, (group) => iteratee.apply(undefined, group));
}

export default unzipWith;
