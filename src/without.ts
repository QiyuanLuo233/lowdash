import baseDifference from './.internal/baseDifference.js';
import isArrayLikeObject from './isArrayLikeObject.js';

/**
 * 创建一个剔除所有给定值的新数组，剔除值的时候，使用SameValueZero做相等比较。
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 *
 * **Note:** 不像_.pull, 这个方法会返回一个新数组。
 *
 * @since 1.0.0
 * @category Array
 * @param {Array} array The array to inspect.
 * @param {...*} [values] The values to exclude.
 * @returns {Array} Returns the new array of filtered values.
 * @see difference, union, unionBy, unionWith, xor, xorBy, xorWith
 * @example
 *
 * without([2, 1, 2, 3], 1, 2)
 * // => [3]
 */
function without(array:any [], ...values):any [] {
    return isArrayLikeObject(array) ? baseDifference(array, values) : [];
}

export default without;
