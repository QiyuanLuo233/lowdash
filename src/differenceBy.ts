import baseDifference from './.internal/baseDifference.js';
import baseFlatten from './.internal/baseFlatten.js';
import isArrayLikeObject from './isArrayLikeObject.js';
import last from './last.js';

/**
 * 这个方法类似_.difference ，除了它接受一个 iteratee （注：迭代器）， 
 * 调用array 和 values 中的每个元素以产生比较的标准。 结果值是从第一数组中选择。
 * iteratee 会调用一个参数：(value)。
 * （注：首先使用迭代器分别迭代array 和 values中的每个元素，返回的值作为比较值）
 *
 * **Note:** 不像_.pullAllBy，这个方法会返回一个新数组。
 *
 * @since 1.0.0
 * @category Array
 * @param {Array} array The array to inspect.
 * @param {...Array} [values] The values to exclude.
 * @param {Function} iteratee The iteratee invoked per element.
 * @returns {Array} Returns the new array of filtered values.
 * @example
 *
 * differenceBy([2.1, 1.2], [2.3, 3.4], Math.floor)
 * // => [1.2]
 */
function differenceBy(array:any [], ...values:any) {
    let iteratee = last(values);
    if (isArrayLikeObject(iteratee)) {
        iteratee = undefined;
    }
    return isArrayLikeObject(array)
        ? baseDifference(array, baseFlatten(values, 1, isArrayLikeObject, true), iteratee)
        : [];
}

export default differenceBy;
