import baseDifference from './.internal/baseDifference.js';
import baseFlatten from './.internal/baseFlatten.js';
import isArrayLikeObject from './isArrayLikeObject.js';

/**
 *创建一个具有唯一array值的数组，每个值不包含在其他给定的数组中。（
 注：即创建一个新数组，这个数组中的值，为第一个数字（array 参数）
 排除了给定数组中的值。）该方法使用SameValueZero做相等比较。
 结果值的顺序是由第一个数组中的顺序确定。
 *
 * **Note:** 不像_.pullAll，这个方法会返回一个新数组。.
 *
 * @since 1.0.0
 * @category Array
 * @param {Array} array The array to inspect.
 * @param {...Array} [values] The values to exclude.
 * @returns {Array} Returns the new array of filtered values.
 * @see union, unionBy, unionWith, without, xor, xorBy, xorWith,
 * @example
 *
 * difference([2, 1], [2, 3])
 * // => [1]
 */
function difference(array:any [], ...values:any) {
    return isArrayLikeObject(array)
        ? baseDifference(array, baseFlatten(values, 1, isArrayLikeObject, true))
        : [];
}

export default difference;
